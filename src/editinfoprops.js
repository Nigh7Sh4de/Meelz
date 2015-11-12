var InfoProperty = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.prop}
            </div>
        )
    }
})

var CreateNewInfoProp = React.createClass({
    hasError: "has-error",
    submit: function() {
        var value = this.refs.name.value;
        if (_props.indexOf(value) >= 0) {
            console.error('Cannot insert duplicates')
        }
        else {
            _props.push(value);
            this.props.list.forceUpdate();
        }
        this.refs.name.value = '';
    },
    handleKeyPress: function(e) {
        if (e.key == "Enter") {
            this.submit();
        }
    },
    back: function() {
        redraw(Pages.FoodItemListPage);
    },
    render: function() {
        return (
            <div className="form-group {hasError}">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button onClick={this.back} className="btn btn-default">Back</button>
                    </span>
                    <input onKeyPress={this.handleKeyPress} ref="name" placeholder="name" className="form-control" type="text" />
                        <span className="input-group-btn">
                            <button onClick={this.submit} className="btn btn-default">+ Add</button>
                        </span>
                </div>
            </div>
        );
    }
})

var EditInfoPropsPage = React.createClass({
    render: function() {
        var props = _props.map(function(p) {
            return (<InfoProperty prop={p} key={p} />);
        })
        return (
            <div>
                <CreateNewInfoProp list={this} />
                {props}
            </div>
        )
    }
})
