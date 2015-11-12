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
                <button>Create</button>
                <FoodItemList foods={_foods} />
            </div>
        );
    }
})

ReactDOM.render(
    <FoodItemListPage />,
    document.getElementById('react-app')
);

