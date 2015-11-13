var DayItem = React.createClass({
    viewfood: function() {
        console.log(this.props.id);
    },
    render: function() {
        var totalCalories = 0;
        this.props.total.forEach(function (t) {
            if (t.name == 'calories')
                totalCalories = t.value;
        });
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
        console.log(this.props.id);
    },
    render: function() {
        var totalCalories = 0;
        this.props.total.forEach(function (t) {
            if (t.name == 'calories')
                totalCalories = t.value;
        });
        return (
            <div key={this.props.id}>
                <button onClick={this.addfood} className="btn btn-success"><span className="glyphicon glyphicon-plus"></span></button>
                Day #{this.props.id}. Total calories: {totalCalories}
            </div>
        );
    }
});

var DaysPage = React.createClass({
    addfood: function(e) {
        console.log(e.target.day);
    },
    render: function() {
        var c = 0;
        var days = _days.reverse().map(function(d) {
            if (c++ > 0)
                return <DayItem total={d.total} id={d.id} key={d.id} />
            else {
                return <DayToday total={d.total} id={d.id} key={d.id} />
            }
        }.bind(this));

        return (
            <div>
                {days}
            </div>
        );
    }
})
