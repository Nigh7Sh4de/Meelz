var EditableInfoProperty = React.createClass({
    render: function() {
        return (
            // <div className="input-group form-group">
            <div className={this.props.classes}>
                <span className="input-group-addon">{this.props.name}</span>
                <input className="form-control" id={this.props.name} type="text" onChange={this.props.onchange} ref="{this.props.name}"
                    defaultValue={this.props.value}/>
            </div>
        );
    }
})

var CreateFoodPage = React.createClass({
    getnav: function() {

        var createfoodpage = this;

        var CreateFoodPageNav = React.createClass({
            handleClick: function(event) {
                event.preventDefault();
                if (!this.valid())
                    return false;

                var duplicates = false;
                var foundFood = createfoodpage.props.food != null ? _foods.findById(createfoodpage.props.food.id)
                                : null;
                if (foundFood == null) {
                    _foods.push(createfoodpage.state);
                }
                else {
                    _foods[_foods.indexOf(foundFood)] = createfoodpage.state;
                }
                redraw(FoodItemListPage);
            },
            back: function() {
                redraw(FoodItemListPage);
            },
            valid: function() {
                return createfoodpage.state.name && createfoodpage.valid(createfoodpage.state);
            },
            render: function() {
                return (
                    <ul className="nav navbar-nav">
                        <li key="bk" onClick={this.back}><a href="#">Back</a></li>
                        <li key="cf" className={this.valid() ? "" : "disabled"} onClick={this.handleClick}><a href="#">{createfoodpage.edit() ? "Save" : "Create"}</a></li>
                    </ul>
                )
            }
        });

        return <CreateFoodPageNav />;
    },
    getInitialState: function() {
        // console.log(this.props.food);
        return this.props.food || {
            name: this.props.food != null ? this.props.food.name : null,
            id: this.props.food != null ? this.props.food.id : _foods.generateId()
        }
    },
    handleChange: function(e) {
        var state = this.state;
        var value = e.target.value;
        // if (parseInt(value))
        state[e.target.id] = e.target.id == 'name' || isNaN(value) || value == '' ?
                                    value : parseInt(value);
        this.setState(state);

        renav(this);

        // console.log(this.state.name);
    },
    edit: function() {
        return this.props.food != null && this.props.food.name != null;
    },
    valid: function(state) {
        state = state || this.state;
        var valid = true;
        _settings.props.forEach(function(p) {
            if (isNaN(state[p]) && state[p] != null && p != 'name')
                valid = false;
        });
        return valid;
    },
    render: function() {
        var valid = true;
        var props = _settings.props.map(function (p) {
            var classes = "input-group form-group";
            if (isNaN(this.state[p]) && this.state[p] != null && p != 'name'){
                classes += " has-error";
                valid = false;
            }
            return <EditableInfoProperty classes={classes} onchange={this.handleChange} ref={p} key={p} name={p} value={this.state[p]} />
        }.bind(this))
        return (
            <form>
                {props}
            </form>
        );
    }
})
