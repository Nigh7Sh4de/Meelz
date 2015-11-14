var EditableInfoProperty = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(
                "span",
                { className: "input-group-addon" },
                this.props.name
            ),
            React.createElement("input", { className: "form-control", id: this.props.name, type: "text", onChange: this.props.onchange, ref: "{this.props.name}",
                defaultValue: this.props.value })
        );
    }
});

var CreateFoodPage = React.createClass({
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
        state[e.target.id] = e.target.id == 'name' ? value : parseInt(value);
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
        var props = _props.map((function (p) {
            return React.createElement(EditableInfoProperty, { onchange: this.handleChange, ref: p, key: p, name: p, value: this.state[p] });
        }).bind(this));
        return React.createElement(
            "div",
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
                    { className: "btn btn-primary", disabled: !this.state.name, onClick: this.handleClick },
                    this.edit() ? "Save" : "Create"
                )
            )
        );
    }
});