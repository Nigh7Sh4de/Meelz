var CreateFoodPage = React.createClass({
    handleClick: function(event) {
        event.preventDefault();
        _foods.push({
            "name": this.refs.name.value
        });
        redraw(Pages.FoodItemListPage);
    },
    render: function() {
        return (
            <div>
                <input ref="name" defaultValue="name" /><br />
                Calories: <input ref="calories" defaultValue="0" /><br />
                Protein: <input defaultValue="0" /><br />
                Sugar: <input defaultValue="0" /><br />
                Carbs: <input defaultValue="0" /><br />
                <button onClick={this.handleClick}>+ Create</button>
            </div>
        );
    }
})
