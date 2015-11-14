var CurrentDay = _days[_days.length-1];

var GetTotalCalories = function(dayId) {
    var day = _days.findById(dayId);
    var calories = 0;
    day.food.forEach(function (foodId) {
        var food = _foods.findById(foodId);
        calories += food.calories || 0;
    });
    return calories;
}

var DayItem = React.createClass({
    viewfood: function() {
        CurrentDay = _days.findById(this.props.id);
        redraw(<FoodItemListPage />)
    },
    render: function() {
        var totalCalories = GetTotalCalories(this.props.id);
        return (
            <tr key={this.props.id}>
                <td>
                    <button onClick={this.viewfood} className="btn btn-default"><span className="glyphicon glyphicon-tasks"></span></button>
                </td>
                <td>
                    Day #{this.props.id}
                </td>
                <td>
                    Total calories: {totalCalories}
                </td>
            </tr>
        );
    }
})


var DayToday = React.createClass({
    addfood: function() {
        CurrentDay = _days.findById(this.props.id);
        redraw(<FoodItemListPage />);
    },
    render: function() {
        var totalCalories = GetTotalCalories(this.props.id);
        return (
            <tr key={this.props.id}>
                <td>
                    <button onClick={this.addfood} className="btn btn-success"><span className="glyphicon glyphicon-plus"></span></button>
                </td>
                <td>
                    Day #{this.props.id}
                </td>
                <td>
                    Total calories: {totalCalories}
                </td>
            </tr>
        );
    }
});

var DaysPage = React.createClass({
    createday: function() {
        CurrentDay["archive"] = true;
        CurrentDay = _days.push({
            id: _days.generateId(),
            food: []
        });
        this.forceUpdate();
    },
    viewfood: function() {
        CurrentDay = null;
        redraw(<FoodItemListPage />);
    },
    render: function() {
        var c = 1;
        var days = _days.map(function(d) {
            if (c++ < _days.length)
                return <DayItem total={d.total} id={d.id} key={d.id} />
            else {
                return <DayToday total={d.total} id={d.id} key={d.id} />
            }
        }.bind(this)).reverse();

        return (
            <div>
                <div className="btn-group">
                    <button onClick={this.createday} className="btn btn-success"><span className="glyphicon glyphicon-plus"></span> Day</button>
                    <button onClick={this.viewfood} className="btn btn-default">View Food</button>
                </div>
                <ReactBootstrap.Table responsive hover style={{width:"1%", whiteSpace:"nowrap"}}>
                    <tbody>
                        {days}
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        );
    }
})
