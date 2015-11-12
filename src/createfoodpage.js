var CreateFoodPage = React.createClass({
    handleClick: function(event) {
        event.preventDefault();
        _foods.push({
            "name": this.refs.name.value,
            "info": {
                "calories": this.refs.calories.value || 0
            }
        });
        redraw(Pages.FoodItemListPage);
    },
    getInitialState: function() {
        return {
            name: ''
        }
    },
    handleChange: function(e) {
        this.setState({name: e.target.value});
    },
    back: function() {
        redraw(Pages.FoodItemListPage);
    },
    render: function() {
        return (
            <div>
                <input className="form-control" type="text" onChange={this.handleChange} ref="name" placeholder="name" /><br />
                Calories: <input className="form-control" type="text" ref="calories" placeholder="0" /><br />
                Protein: <input className="form-control" type="text" placeholder="asdf" /><br />
                Sugar: <input className="form-control" type="text" placeholder="0" /><br />
                Carbs: <input className="form-control" type="text" placeholder="0" /><br />
                <div className="btn-group">
                    <button className="btn btn-default" onClick={this.back}>Back</button>
                    <button className="btn btn-primary" disabled={!this.state.name} onClick={this.handleClick}>+ Create</button>
                </div>
            </div>
        );
    }
})
