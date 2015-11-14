var CurrentDay = 0;

var GetTotalCalories = function (dayId) {
    var day = _days.findById(dayId);
    var calories = 0;
    day.food.forEach(function (foodId) {
        var food = _foods.findById(foodId);
        calories += food.calories || 0;
    });
    return calories;
};

var DayItem = React.createClass({
    viewfood: function () {
        CurrentDay = this.props.id;
        redraw(React.createElement(FoodItemListPage, { readonly: true }));
    },
    render: function () {
        var totalCalories = GetTotalCalories(this.props.id);
        return React.createElement(
            "div",
            { key: this.props.id },
            React.createElement(
                "button",
                { onClick: this.viewfood, className: "btn btn-default" },
                React.createElement("span", { className: "glyphicon glyphicon-tasks" })
            ),
            "Day #",
            this.props.id,
            ". Total calories: ",
            totalCalories
        );
    }
});

var DayToday = React.createClass({
    addfood: function () {
        CurrentDay = this.props.id;
        redraw(React.createElement(FoodItemListPage, null));
    },
    render: function () {
        var totalCalories = GetTotalCalories(this.props.id);
        return React.createElement(
            "div",
            { key: this.props.id },
            React.createElement(
                "button",
                { onClick: this.addfood, className: "btn btn-success" },
                React.createElement("span", { className: "glyphicon glyphicon-plus" })
            ),
            "Day #",
            this.props.id,
            ". Total calories: ",
            totalCalories
        );
    }
});

var DaysPage = React.createClass({
    createday: function () {
        _days.push({
            id: _days.generateId(),
            food: []
        });
        this.forceUpdate();
    },
    render: function () {
        var c = 1;
        var days = _days.map((function (d) {
            if (c++ < _days.length) return React.createElement(DayItem, { total: d.total, id: d.id, key: d.id });else {
                return React.createElement(DayToday, { total: d.total, id: d.id, key: d.id });
            }
        }).bind(this)).reverse();

        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.createday, className: "btn btn-success" },
                React.createElement("span", { className: "glyphicon glyphicon-plus" }),
                "Day"
            ),
            days
        );
    }
});