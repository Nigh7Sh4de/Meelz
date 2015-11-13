var DayItem = React.createClass({
    viewfood: function () {
        console.log(this.props.id);
    },
    render: function () {
        var totalCalories = 0;
        this.props.total.forEach(function (t) {
            if (t.name == 'calories') totalCalories = t.value;
        });
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
        console.log(this.props.id);
    },
    render: function () {
        var totalCalories = 0;
        this.props.total.forEach(function (t) {
            if (t.name == 'calories') totalCalories = t.value;
        });
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
    addfood: function (e) {
        console.log(e.target.day);
    },
    render: function () {
        var c = 0;
        var days = _days.reverse().map((function (d) {
            if (c++ > 0) return React.createElement(DayItem, { total: d.total, id: d.id, key: d.id });else {
                return React.createElement(DayToday, { total: d.total, id: d.id, key: d.id });
            }
        }).bind(this));

        return React.createElement(
            "div",
            null,
            days
        );
    }
});