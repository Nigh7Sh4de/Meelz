var CurrentDay = 0;

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
        CurrentDay = this.props.id;
        redraw(<FoodItemListPage readonly={true} />)
    },
    render: function() {
        var totalCalories = GetTotalCalories(this.props.id);
        return (
            <div key={this.props.id}>
                <button onClick={this.viewfood} className="btn btn-default"><span className="glyphicon glyphicon-tasks"></span></button>
                Day #{this.props.id}. Total calories: {totalCalories}
            </div>
        );
    }
})


var DayToday = React.createClass({
    addfood: function() {
        CurrentDay = this.props.id;
        redraw(<FoodItemListPage />);
    },
    render: function() {
        var totalCalories = GetTotalCalories(this.props.id);
        return (
            <div key={this.props.id}>
                <button onClick={this.addfood} className="btn btn-success"><span className="glyphicon glyphicon-plus"></span></button>
                Day #{this.props.id}. Total calories: {totalCalories}
            </div>
        );
    }
});

var DaysPage = React.createClass({
    createday: function() {
        _days.push({
            id: _days.generateId(),
            food: []
        });
        this.forceUpdate();
    },
    viewfood: function() {
        CurrentDay = -1;
        redraw(<FoodItemListPage readonly={true} />);
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
                {days}
            </div>
        );
    }
})
