var CreateFoodButton = React.createClass({
    handleClick: function(event) {
        redraw(Pages.CreateFoodPage);
    },
    render: function() {
        return (
            <button className="btn btn-default" onClick={this.handleClick}>+ Create</button>
        );
    }
})

var SettingsButton = React.createClass({
    handleClick: function(e) {
        redraw(Pages.EditInfoPropsPage);
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
    render: function () {
        return (
            <div>
                <button className="btn btn-success">+</button>
                {this.props.food.name}
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
