var EditableInfoProperty = React.createClass({
    displayName: "EditableInfoProperty",

    render: function () {
        return(
            // <div className="input-group form-group">
            React.createElement(
                "div",
                { className: this.props.classes },
                React.createElement(
                    "span",
                    { className: "input-group-addon" },
                    this.props.name
                ),
                React.createElement("input", { className: "form-control", id: this.props.name, type: "text", onChange: this.props.onchange, ref: "{this.props.name}",
                    defaultValue: this.props.value })
            )
        );
    }
});

var CreateFoodPage = React.createClass({
    displayName: "CreateFoodPage",

    handleClick: function (event) {
        event.preventDefault();
        var duplicates = false;
        var foundFood = this.props.food != null ? _foods.findById(this.props.food.id) : null;
        if (foundFood == null) {
            _foods.push(this.state);
        } else {
            _foods[_foods.indexOf(foundFood)] = this.state;
        }
        redraw(React.createElement(FoodItemListPage, null));
    },
    getInitialState: function () {
        console.log(this.props.food);
        return this.props.food || {
            name: this.props.food != null ? this.props.food.name : null,
            id: this.props.food != null ? this.props.food.id : _foods.generateId()
        };
    },
    handleChange: function (e) {
        var state = this.state;
        var value = e.target.value;
        // if (parseInt(value))
        state[e.target.id] = e.target.id == 'name' || isNaN(value) || value == '' ? value : parseInt(value);
        this.setState(state);
        console.log(this.state.name);
    },
    back: function () {
        redraw(React.createElement(FoodItemListPage, null));
    },
    edit: function () {
        return this.props.food != null && this.props.food.name != null;
    },
    render: function () {
        var valid = true;
        var props = _settings.props.map(function (p) {
            var classes = "input-group form-group";
            if (isNaN(this.state[p]) && this.state[p] != null && p != 'name') {
                classes += " has-error";
                valid = false;
            }
            return React.createElement(EditableInfoProperty, { classes: classes, onchange: this.handleChange, ref: p, key: p, name: p, value: this.state[p] });
        }.bind(this));
        return React.createElement(
            "form",
            null,
            props,
            React.createElement(
                "div",
                { className: "btn-group" },
                React.createElement(
                    "button",
                    { className: "btn btn-default", onClick: this.back },
                    "Back"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-primary", disabled: !this.state.name || !valid, onClick: this.handleClick },
                    this.edit() ? "Save" : "Create"
                )
            )
        );
    }
});