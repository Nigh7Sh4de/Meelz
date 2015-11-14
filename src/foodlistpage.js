var CreateFoodButton = React.createClass({
    handleClick: function(event) {
        redraw(<CreateFoodPage />);
    },
    render: function() {
        return (
            <button className="btn btn-default" onClick={this.handleClick}>+ Create</button>
        );
    }
})

var SettingsButton = React.createClass({
    handleClick: function(e) {
        redraw(<EditInfoPropsPage />);
    },
    render: function() {
        return (
            <button className="btn btn-default" onClick={this.handleClick}>
                <span className="glyphicon glyphicon-cog"></span>
            </button>
        )
    }
})

var FoodItem = React.createClass({
    addfood: function() {
        var day = _days.findById(CurrentDay);
        day.food.push(this.props.food.id);
        return;
    },
    editfood: function(e) {
        redraw(<CreateFoodPage food={this.props.food} />);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.addfood} disabled={this.props.readonly} className="btn btn-success">+</button>
                {this.props.food.name}
                <button onClick={this.editfood} className="btn btn-default">
                    <span className="glyphicon glyphicon-cog"></span>
                </button>
            </div>
        );
    }
})

var FoodItemList = React.createClass({
    render: function() {
        var foods = _foods.map(function(food) {
            return <FoodItem food={food} key={food.name} readonly={this.props.readonly}/>
        }.bind(this));
        if (CurrentDay >= 0 && this.props.readonly) {
            var day = _days.findById(CurrentDay);
            for (var i=0,j=0;i<foods.length;i++,j++)
                if (day.food.indexOf(j) < 0)
                    foods.splice(i--, 1);
            // foods.forEach(function (e, i) {

            // });
        }
        return (
            <div>{foods}</div>
        );
    }
})

var FoodItemListPage = React.createClass({
    back: function() {
        redraw(<DaysPage />)
    },
    render: function() {
        return (
            <div>
                <div className="btn-group">
                    <button onClick={this.back} className="btn btn-default">Back</button>
                    <CreateFoodButton /><SettingsButton />
                </div>
                <FoodItemList readonly={this.props.readonly} />
            </div>
        );
    }
})
