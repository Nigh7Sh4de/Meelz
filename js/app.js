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

ReactDOM.render(React.createElement(FoodItemList, { foods: _foods }), document.getElementById('FoodItemList'));

/*
ReactDOM.render(
    <FoodItem food="" />,
    document.getElementById('FoodItem')
)
*/
