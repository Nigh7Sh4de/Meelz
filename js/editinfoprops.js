var InfoProperty = React.createClass({
    render: function () {
        return React.createElement(
            "li",
            { className: "list-group-item" },
            this.props.name
        );
    }
});

var CreateNewInfoProp = React.createClass({
    hasError: "has-error",
    submit: function () {
        var value = this.refs.name.value;
        if (_settings[this.props.list].indexOf(value) >= 0) {
            console.error('Cannot insert duplicates');
        } else {
            _settings[this.props.list].push(value);
            this.props.view.forceUpdate();
        }
        this.refs.name.value = '';
    },
    handleKeyPress: function (e) {
        if (e.key == "Enter") {
            this.submit();
        }
    },
    render: function () {
        return React.createElement(
            "div",
            { className: "form-group {hasError}" },
            React.createElement(
                "div",
                { className: "input-group" },
                React.createElement("input", { onKeyPress: this.handleKeyPress, ref: "name", placeholder: "name", className: "form-control", type: "text" }),
                React.createElement(
                    "span",
                    { className: "input-group-btn" },
                    React.createElement(
                        "button",
                        { onClick: this.submit, className: "btn btn-default" },
                        "+ Add"
                    )
                )
            )
        );
    }
});

var EditHomePageCols = React.createClass({
    render: function () {

        React.createElement(
            "div",
            { className: "form-group {hasError}" },
            React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                    "span",
                    { className: "input-group-btn" },
                    React.createElement(
                        "button",
                        { onClick: this.back, className: "btn btn-default" },
                        "Back"
                    )
                ),
                React.createElement("input", { onKeyPress: this.handleKeyPress, ref: "name", placeholder: "name", className: "form-control", type: "text" }),
                React.createElement(
                    "span",
                    { className: "input-group-btn" },
                    React.createElement(
                        "button",
                        { onClick: this.submit, className: "btn btn-default" },
                        "+ Add"
                    )
                )
            )
        );
    }
});

var EditInfoPropsPage = React.createClass({
    back: function () {
        redraw(React.createElement(DaysPage, null));
    },
    render: function () {
        var props = _settings.props.map(function (p) {
            return React.createElement(InfoProperty, { name: p, key: p });
        });

        var cols = _settings.home_cols.map(function (s) {
            return React.createElement(InfoProperty, { name: s, key: s });
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "span",
                { className: "input-btn" },
                React.createElement(
                    "button",
                    { onClick: this.back, className: "btn btn-default" },
                    "Back"
                )
            ),
            React.createElement(
                "h4",
                null,
                "Set food information properties"
            ),
            React.createElement(CreateNewInfoProp, { view: this, list: 'props' }),
            React.createElement(
                "ul",
                { className: "list-group" },
                props
            ),
            React.createElement(
                "h4",
                null,
                "Set home page columns"
            ),
            React.createElement(CreateNewInfoProp, { view: this, list: 'home_cols' }),
            React.createElement(
                "ul",
                { className: "list-group" },
                cols
            )
        );
    }
});