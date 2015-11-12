var CreateFoodPage = React.createClass({
    handleClick: function (event) {
        event.preventDefault();
        _foods.push({
            "name": this.refs.name.value
        });
        redraw(Pages.FoodItemListPage);
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { ref: "name", defaultValue: "name" }),
            React.createElement("br", null),
            "Calories: ",
            React.createElement("input", { ref: "calories", defaultValue: "0" }),
            React.createElement("br", null),
            "Protein: ",
            React.createElement("input", { defaultValue: "0" }),
            React.createElement("br", null),
            "Sugar: ",
            React.createElement("input", { defaultValue: "0" }),
            React.createElement("br", null),
            "Carbs: ",
            React.createElement("input", { defaultValue: "0" }),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: this.handleClick },
                "+ Create"
            )
        );
    }
});