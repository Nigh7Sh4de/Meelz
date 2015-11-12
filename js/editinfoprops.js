var InfoProperty = React.createClass({
    render: function () {
        return React.createElement(
            'div',
            null,
            this.props.prop
        );
    }
});

var CreateNewInfoProp = React.createClass({
    hasError: "has-error",
    submit: function () {
        var value = this.refs.name.value;
        if (_props.indexOf(value) >= 0) {
            console.error('Cannot insert duplicates');
        } else {
            _props.push(value);
            this.props.list.forceUpdate();
        }
        this.refs.name.value = '';
    },
    handleKeyPress: function (e) {
        if (e.key == "Enter") {
            this.submit();
        }
    },
    back: function () {
        redraw(Pages.FoodItemListPage);
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'form-group {hasError}' },
            React.createElement(
                'div',
                { className: 'input-group' },
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { onClick: this.back, className: 'btn btn-default' },
                        'Back'
                    )
                ),
                React.createElement('input', { onKeyPress: this.handleKeyPress, ref: 'name', placeholder: 'name', className: 'form-control', type: 'text' }),
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { onClick: this.submit, className: 'btn btn-default' },
                        '+ Add'
                    )
                )
            )
        );
    }
});

var EditInfoPropsPage = React.createClass({
    render: function () {
        var props = _props.map(function (p) {
            return React.createElement(InfoProperty, { prop: p, key: p });
        });
        return React.createElement(
            'div',
            null,
            React.createElement(CreateNewInfoProp, { list: this }),
            props
        );
    }
});