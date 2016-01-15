var EditableInfoProperty = React.createClass({
    displayName: "EditableInfoProperty",

    render: function () {
        return(
            // <div className="input-group form-group">
            React.createElement(
                "div",
                { className: this.props.classes },
                React.createElement(
                    "span",
                    { className: "input-group-addon" },
                    this.props.name
                ),
                React.createElement("input", { className: "form-control", id: this.props.name, type: "text", onChange: this.props.onchange, ref: "{this.props.name}",
                    defaultValue: this.props.value })
            )
        );
    }
});

var CreateFoodPage = React.createClass({
    displayName: "CreateFoodPage",

    getnav: function () {

        var createfoodpage = this;

        var CreateFoodPageNav = React.createClass({
            displayName: "CreateFoodPageNav",

            handleClick: function (event) {
                event.preventDefault();
                if (!this.valid()) return false;

                var duplicates = false;
                var foundFood = createfoodpage.props.food != null ? _foods.findById(createfoodpage.props.food.id) : null;
                if (foundFood == null) {
                    _foods.push(createfoodpage.state);
                } else {
                    _foods[_foods.indexOf(foundFood)] = createfoodpage.state;
                }
                redraw(FoodItemListPage);
            },
            back: function () {
                redraw(FoodItemListPage);
            },
            valid: function () {
                return createfoodpage.state.name && createfoodpage.valid(createfoodpage.state);
            },
            render: function () {
                return React.createElement(
                    "ul",
                    { className: "nav navbar-nav" },
                    React.createElement(
                        "li",
                        { key: "bk", onClick: this.back },
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Back"
                        )
                    ),
                    React.createElement(
                        "li",
                        { key: "cf", className: this.valid() ? "" : "disabled", onClick: this.handleClick },
                        React.createElement(
                            "a",
                            { href: "#" },
                            createfoodpage.edit() ? "Save" : "Create"
                        )
                    )
                );
            }
        });

        return React.createElement(CreateFoodPageNav, null);
    },
    getInitialState: function () {
        // console.log(this.props.food);
        return this.props.food || {
            name: this.props.food != null ? this.props.food.name : null,
            id: this.props.food != null ? this.props.food.id : _foods.generateId()
        };
    },
    handleChange: function (e) {
        var state = this.state;
        var value = e.target.value;
        // if (parseInt(value))
        state[e.target.id] = e.target.id == 'name' || isNaN(value) || value == '' ? value : parseInt(value);
        this.setState(state);

        renav(this);

        // console.log(this.state.name);
    },
    edit: function () {
        return this.props.food != null && this.props.food.name != null;
    },
    valid: function (state) {
        state = state || this.state;
        var valid = true;
        _settings.props.forEach(function (p) {
            if (isNaN(state[p]) && state[p] != null && p != 'name') valid = false;
        });
        return valid;
    },
    render: function () {
        var valid = true;
        var props = _settings.props.map(function (p) {
            var classes = "input-group form-group";
            if (isNaN(this.state[p]) && this.state[p] != null && p != 'name') {
                classes += " has-error";
                valid = false;
            }
            return React.createElement(EditableInfoProperty, { classes: classes, onchange: this.handleChange, ref: p, key: p, name: p, value: this.state[p] });
        }.bind(this));
        return React.createElement(
            "form",
            null,
            props
        );
    }
});