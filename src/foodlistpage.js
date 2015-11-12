var _foods = [
{
  "name": "Mashed Potatoes",
  "info": {}
},
{
  "name": "Chicken Breast",
  "info": {}
},
{
  "name": "Vegetables",
  "info": {}
},
{
  "name": "Spaghetti",
  "info": {}
}
]

var CreateFoodButton = React.createClass({
    handleClick: function(event) {
        redraw(Pages.CreateFoodPage);
    },
    render: function() {
        return (
            <button onClick={this.handleClick}>Create</button>
        );
    }
})

var FoodItem = React.createClass({
    render: function () {
        return (
            <div>
                <button>+</button>
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
                <CreateFoodButton />
                <FoodItemList foods={_foods} />
            </div>
        );
    }
})
