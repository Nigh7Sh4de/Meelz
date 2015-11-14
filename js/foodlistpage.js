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
        CurrentDay.food.push(this.props.food.id);
        if (this.props.refresh != null) this.props.refresh();
        return;
    },
    editfood: function (e) {
        redraw(React.createElement(CreateFoodPage, { food: this.props.food }));
    },
    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { onClick: this.addfood, disabled: CurrentDay == null || CurrentDay.archive, className: "btn btn-success" },
                    "+"
                )
            ),
            React.createElement(
                "td",
                { style: { verticalAlign: "middle" } },
                React.createElement(
                    "span",
                    { className: "badge" },
                    this.props.count
                ),
                " ",
                this.props.food.name
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { onClick: this.editfood, className: "btn btn-default" },
                    React.createElement("span", { className: "glyphicon glyphicon-cog" })
                )
            )
        );
    }
});

var FoodItemList = React.createClass({
    refresh: function () {
        this.forceUpdate();
    },
    render: function () {
        var foods = _foods.map((function (food) {
            if (CurrentDay == null) return React.createElement(FoodItem, { food: food, key: food.name });

            var count = CurrentDay.food.filter(function (d) {
                return d == food.id;
            }).length;
            return React.createElement(FoodItem, { count: count, refresh: this.refresh, food: food, key: food.name });
        }).bind(this));
        if (CurrentDay != null && CurrentDay.archive) {
            for (var i = 0, j = 0; i < foods.length; i++, j++) if (CurrentDay.food.indexOf(j) < 0) foods.splice(i--, 1);
        }
        return React.createElement(
            "tbody",
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
                { className: "btn-group", style: { display: "flex" } },
                React.createElement(
                    "button",
                    { onClick: this.back, className: "btn btn-default" },
                    "Back"
                ),
                React.createElement(CreateFoodButton, null),
                React.createElement(SettingsButton, null)
            ),
            React.createElement(
                ReactBootstrap.Table,
                { hover: true, style: { width: "1%", whiteSpace: "nowrap" } },
                React.createElement(FoodItemList, null)
            )
        );
    }
});