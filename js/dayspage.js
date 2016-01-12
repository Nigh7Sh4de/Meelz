var CurrentDay = _days[_days.length - 1];

var GetTotal = function (prop, dayId) {
    var day = _days.findById(dayId);
    var total = 0;
    day.food.forEach(function (foodId) {
        var food = _foods.findById(foodId);
        total += food[prop] || 0;
    });
    return total;
};

var DayItem = React.createClass({
    displayName: "DayItem",

    viewfood: function () {
        CurrentDay = _days.findById(this.props.id);
        redraw(FoodItemListPage);
    },
    render: function () {
        var totals = _settings.home_cols.map(function (c) {
            var t = GetTotal(c, this.props.id);
            return React.createElement(
                "td",
                { key: c },
                t
            );
        }.bind(this));
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
            totals
        );
    }
});

var DayToday = React.createClass({
    displayName: "DayToday",

    addfood: function () {
        CurrentDay = _days.findById(this.props.id);
        redraw(FoodItemListPage);
    },
    render: function () {
        var totals = _settings.home_cols.map(function (c) {
            var t = GetTotal(c, this.props.id);
            return React.createElement(
                "td",
                { key: c },
                t
            );
        }.bind(this));
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
            totals
        );
    }
});

var DaysPage = React.createClass({
    displayName: "DaysPage",

    getnav: function (dayspage) {
        var dayspage = this;

        var DaysPageNav = React.createClass({
            displayName: "DaysPageNav",

            viewfood: function () {
                CurrentDay = null;
                redraw(FoodItemListPage);
            },
            showsettings: function (e) {
                redraw(EditInfoPropsPage);
            },
            createday: function (e) {
                if (e.target.id != "override" && CurrentDay.date == new Date().toDateString()) {
                    this.open();
                    return;
                }
                CurrentDay["archive"] = true;
                _days.push(CurrentDay = {
                    id: _days.generateId(),
                    food: [],
                    date: new Date().toDateString()
                });
                this.close();
                dayspage.forceUpdate();
                // redraw(DaysPage);
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
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "ul",
                        { className: "nav navbar-nav" },
                        React.createElement(
                            "li",
                            { key: "nd", onClick: this.createday },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("span", { className: "glyphicon glyphicon-plus" }),
                                " Day"
                            )
                        ),
                        React.createElement(
                            "li",
                            { key: "vf", onClick: this.viewfood },
                            React.createElement(
                                "a",
                                { href: "#" },
                                "View Food"
                            )
                        ),
                        React.createElement(
                            "li",
                            { key: "ss", onClick: this.showsettings },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("span", { className: "glyphicon glyphicon-cog" })
                            )
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
        return React.createElement(DaysPageNav, null);
    },
    render: function () {

        CurrentDay = _days[_days.length - 1];
        var c = 1;
        var days = _days.map(function (d) {
            if (c++ < _days.length) return React.createElement(DayItem, { date: d.date, total: d.total, id: d.id, key: d.id });else {
                return React.createElement(DayToday, { date: d.date, total: d.total, id: d.id, key: d.id });
            }
        }.bind(this)).reverse();

        var home_cols = _settings.home_cols.map(function (c) {
            return React.createElement(
                "th",
                { key: c },
                c
            );
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                ReactBootstrap.Table,
                { responsive: true, hover: true, style: { width: "1%", whiteSpace: "nowrap" } },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement("th", null),
                        React.createElement(
                            "th",
                            null,
                            "Date"
                        ),
                        home_cols
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    days
                )
            )
        );
    }
});