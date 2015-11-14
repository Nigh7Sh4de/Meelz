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
    addfood: function () {
        var day = _days.findById(CurrentDay);
        day.food.push(this.props.food.id);
        return;
    },
    editfood: function (e) {
        redraw(React.createElement(CreateFoodPage, { food: this.props.food }));
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.addfood, disabled: this.props.readonly, className: "btn btn-success" },
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
        var foods = _foods.map((function (food) {
            return React.createElement(FoodItem, { food: food, key: food.name, readonly: this.props.readonly });
        }).bind(this));
        if (CurrentDay >= 0 && this.props.readonly) {
            var day = _days.findById(CurrentDay);
            for (var i = 0, j = 0; i < foods.length; i++, j++) if (day.food.indexOf(j) < 0) foods.splice(i--, 1);
            // foods.forEach(function (e, i) {

            // });
        }
        return React.createElement(
            "div",
            null,
            foods
        );
    }
});

var FoodItemListPage = React.createClass({
    back: function () {
        redraw(React.createElement(DaysPage, null));
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "btn-group" },
                React.createElement(
                    "button",
                    { onClick: this.back, className: "btn btn-default" },
                    "Back"
                ),
                React.createElement(CreateFoodButton, null),
                React.createElement(SettingsButton, null)
            ),
            React.createElement(FoodItemList, { readonly: this.props.readonly })
        );
    }
});