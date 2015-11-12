var CreateFoodButton = React.createClass({
    handleClick: function (event) {
        redraw(Pages.CreateFoodPage);
    },
    render: function () {
        return React.createElement(
            "button",
            { className: "btn btn-default", onClick: this.handleClick },
            "+ Create"
        );
    }
});

var SettingsButton = React.createClass({
    handleClick: function (e) {
        redraw(Pages.EditInfoPropsPage);
    },
    render: function () {
        return React.createElement(
            "button",
            { className: "btn btn-default", onClick: this.handleClick },
            React.createElement("span", { className: "glyphicon glyphicon-cog" })
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
                { className: "btn btn-success" },
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
            React.createElement(
                "div",
                { className: "btn-group" },
                React.createElement(CreateFoodButton, null),
                React.createElement(SettingsButton, null)
            ),
            React.createElement(FoodItemList, { foods: _foods })
        );
    }
});