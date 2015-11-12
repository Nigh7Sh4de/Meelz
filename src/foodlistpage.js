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
    editfood: function(e) {
        redraw(<CreateFoodPage food={this.props.food} />);
    },
    render: function () {
        return (
            <div className="card">
                <button className="btn btn-success">+</button>
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
        var foods = this.props.foods.map(function(food) {
            return <FoodItem food={food} key={food.name} />
        });
        return (
            <div>{foods}</div>
        );
    }
})

var FoodItemListPage = React.createClass({
    render: function() {
        return (
            <div>
                <div className="btn-group">
                    <CreateFoodButton /><SettingsButton />
                </div>
                <FoodItemList foods={_foods} />
            </div>
        );
    }
})
