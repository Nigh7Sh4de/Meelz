var _foods = [{
    "name": "Mashed Potatoes",
    "info": {}
}, {
    "name": "Chicken Breast",
    "info": {}
}, {
    "name": "Vegetables",
    "info": {}
}, {
    "name": "Spaghetti",
    "info": {}
}];

var CreateFoodButton = React.createClass({
    handleClick: function (event) {
        redraw(Pages.CreateFoodPage);
    },
    render: function () {
        return React.createElement(
            "button",
            { onClick: this.handleClick },
            "Create"
        );
    }
});

var FoodItem = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                null,
                "+"
            ),
            this.props.food.name
        );
    }
});

var FoodItemList = React.createClass({

    render: function () {
        var foods = this.props.foods.map(function (food) {
            return React.createElement(FoodItem, { food: food, key: food.name });
        });
        return React.createElement(
            "div",
            null,
            foods
        );
    }
});

var FoodItemListPage = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(CreateFoodButton, null),
            React.createElement(FoodItemList, { foods: _foods })
        );
    }
});
