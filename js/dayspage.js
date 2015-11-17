var CurrentDay = _days[_days.length - 1];

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
        CurrentDay = _days.findById(this.props.id);
        redraw(React.createElement(FoodItemListPage, null));
    },
    render: function () {
        var totalCalories = GetTotalCalories(this.props.id);
        return React.createElement(
            "tr",
            { key: this.props.id },
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { onClick: this.viewfood, className: "btn btn-default" },
                    React.createElement("span", { className: "glyphicon glyphicon-tasks" })
                )
            ),
            React.createElement(
                "td",
                null,
                this.props.date
            ),
            React.createElement(
                "td",
                null,
                "Total calories: ",
                totalCalories
            )
        );
    }
});

var DayToday = React.createClass({
    addfood: function () {
        CurrentDay = _days.findById(this.props.id);
        redraw(React.createElement(FoodItemListPage, null));
    },
    render: function () {
        var totalCalories = GetTotalCalories(this.props.id);
        return React.createElement(
            "tr",
            { key: this.props.id },
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { onClick: this.addfood, className: "btn btn-success" },
                    React.createElement("span", { className: "glyphicon glyphicon-plus" })
                )
            ),
            React.createElement(
                "td",
                null,
                this.props.date
            ),
            React.createElement(
                "td",
                null,
                "Total calories: ",
                totalCalories
            )
        );
    }
});

var DaysPage = React.createClass({
    createday: function (e) {
        if (e.target.id != "override" && CurrentDay.date == new Date().toDateString()) {
            this.open();
            return;
        }
        CurrentDay["archive"] = true;
        CurrentDay = _days.push({
            id: _days.generateId(),
            food: [],
            date: new Date().toDateString()
        });
        this.close();
    },
    viewfood: function () {
        CurrentDay = null;
        redraw(React.createElement(FoodItemListPage, null));
    },
    open: function () {
        this.setState({ showModal: true });
    },
    close: function () {
        this.setState({ showModal: false });
    },
    getInitialState: function () {
        return { showModal: false };
    },
    render: function () {
        CurrentDay = _days[_days.length - 1];
        var c = 1;
        var days = _days.map((function (d) {
            if (c++ < _days.length) return React.createElement(DayItem, { date: d.date, total: d.total, id: d.id, key: d.id });else {
                return React.createElement(DayToday, { date: d.date, total: d.total, id: d.id, key: d.id });
            }
        }).bind(this)).reverse();

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "btn-group" },
                React.createElement(
                    "button",
                    { onClick: this.createday, id: "create", className: "btn btn-success" },
                    React.createElement("span", { className: "glyphicon glyphicon-plus" }),
                    " Day"
                ),
                React.createElement(
                    "button",
                    { onClick: this.viewfood, className: "btn btn-default" },
                    "View Food"
                )
            ),
            React.createElement(
                ReactBootstrap.Table,
                { responsive: true, hover: true, style: { width: "1%", whiteSpace: "nowrap" } },
                React.createElement(
                    "tbody",
                    null,
                    days
                )
            ),
            React.createElement(
                ReactBootstrap.Modal,
                { show: this.state.showModal, onHide: this.close },
                React.createElement(
                    ReactBootstrap.Modal.Body,
                    null,
                    React.createElement(
                        "h4",
                        null,
                        "Confirm new day"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You already made a new day today. Are you sure you want to generate a new day with today's date?"
                    )
                ),
                React.createElement(
                    ReactBootstrap.Modal.Footer,
                    null,
                    React.createElement(
                        "button",
                        { className: "btn btn-warning", id: "override", onClick: this.createday },
                        "Confirm"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-default", onClick: this.close },
                        "Close"
                    )
                )
            )
        );
    }
});