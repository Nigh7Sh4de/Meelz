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
                value: this.props.value })
        );
    }
});

var CreateFoodPage = React.createClass({
    handleClick: function (event) {
        event.preventDefault();
        var duplicates = false;
        for (var i = 0; i < _foods.length; i++) if (_foods[i].name == this.state.name) {
            console.error("Cannot insert duplicate names.");
            return;
        }
        _foods.push(this.state);
        redraw(React.createElement(FoodItemListPage, null));
    },
    getInitialState: function () {
        return {
            name: ''
        };
    },
    handleChange: function (e) {
        var state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
    },
    back: function () {
        redraw(React.createElement(FoodItemListPage, null));
    },
    edit: function () {
        return this.props.food != null && this.props.food.name != null;
    },
    render: function () {
        var props = _props.map((function (p) {
            if (this.props.food != null) return React.createElement(EditableInfoProperty, { onchange: this.handleChange, ref: p, key: p, name: p, value: this.props.food[p] });else {
                return React.createElement(EditableInfoProperty, { onchange: this.handleChange, ref: p, key: p, name: p });
            }
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