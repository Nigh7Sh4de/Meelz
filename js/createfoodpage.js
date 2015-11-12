var CreateFoodPage = React.createClass({
    handleClick: function (event) {
        event.preventDefault();
        _foods.push({
            "name": this.refs.name.value,
            "info": {
                "calories": this.refs.calories.value || 0
            }
        });
        redraw(Pages.FoodItemListPage);
    },
    getInitialState: function () {
        return {
            name: ''
        };
    },
    handleChange: function (e) {
        this.setState({ name: e.target.value });
    },
    back: function () {
        redraw(Pages.FoodItemListPage);
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { className: "form-control", type: "text", onChange: this.handleChange, ref: "name", placeholder: "name" }),
            React.createElement("br", null),
            "Calories: ",
            React.createElement("input", { className: "form-control", type: "text", ref: "calories", placeholder: "0" }),
            React.createElement("br", null),
            "Protein: ",
            React.createElement("input", { className: "form-control", type: "text", placeholder: "asdf" }),
            React.createElement("br", null),
            "Sugar: ",
            React.createElement("input", { className: "form-control", type: "text", placeholder: "0" }),
            React.createElement("br", null),
            "Carbs: ",
            React.createElement("input", { className: "form-control", type: "text", placeholder: "0" }),
            React.createElement("br", null),
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
                    "+ Create"
                )
            )
        );
    }
});