var CreateFoodButton = React.createClass({
    handleClick: function (event) {
        redraw(React.createElement(CreateFoodPage, null));
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
        redraw(React.createElement(EditInfoPropsPage, null));
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
    editfood: function (e) {
        redraw(React.createElement(CreateFoodPage, { food: this.props.food }));
    },
    render: function () {
        return React.createElement(
            "div",
            { className: "card" },
            React.createElement(
                "button",
                { className: "btn btn-success" },
                "+"
            ),
            this.props.food.name,
            React.createElement(
                "button",
                { onClick: this.editfood, className: "btn btn-default" },
                React.createElement("span", { className: "glyphicon glyphicon-cog" })
            )
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