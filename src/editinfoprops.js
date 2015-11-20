var InfoProperty = React.createClass({
    render: function() {
        return (
            <li className="list-group-item">
                {this.props.name}
            </li>
        )
    }
})

var CreateNewInfoProp = React.createClass({
    hasError: "has-error",
    submit: function() {
        var value = this.refs.name.value;
        if (_settings[this.props.list].indexOf(value) >= 0) {
            console.error('Cannot insert duplicates')
        }
        else {
            _settings[this.props.list].push(value);
            this.props.view.forceUpdate();
        }
        this.refs.name.value = '';
    },
    handleKeyPress: function(e) {
        if (e.key == "Enter") {
            this.submit();
        }
    },
    render: function() {
        return (
            <div className="form-group {hasError}">
                <div className="input-group">
                    <input onKeyPress={this.handleKeyPress} ref="name" placeholder="name" className="form-control" type="text" />
                        <span className="input-group-btn">
                            <button onClick={this.submit} className="btn btn-default">+ Add</button>
                        </span>
                </div>
            </div>
        );
    }
});

var EditHomePageCols = React.createClass({
    render: function() {

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
    }
})

var EditInfoPropsPage = React.createClass({
    back: function() {
        redraw(<DaysPage />);
    },
    render: function() {
        var props = _settings.props.map(function(p) {
            return (<InfoProperty name={p} key={p} />);
        })

        var cols = _settings.home_cols.map(function(s) {
            return (<InfoProperty name={s} key={s} />);
        });

        return (
            <div>
                <span className="input-btn">
                    <button onClick={this.back} className="btn btn-default">Back</button>
                </span>


                <h4>Set food information properties</h4>
                <CreateNewInfoProp view={this} list={'props'} />
                <ul className="list-group">
                    {props}
                </ul>

                <h4>Set home page columns</h4>
                <CreateNewInfoProp view={this} list={'home_cols'} />
                <ul className="list-group">
                    {cols}
                </ul>
            </div>
        )
    }
})
