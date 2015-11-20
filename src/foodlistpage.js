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

// var SettingsButton = React.createClass({
//     handleClick: function(e) {
//         redraw(<EditInfoPropsPage />);
//     },
//     render: function() {
//         return (
//             <button className="btn btn-default" onClick={this.handleClick}>
//                 <span className="glyphicon glyphicon-cog"></span>
//             </button>
//         )
//     }
// })

var FoodItem = React.createClass({
    addfood: function() {
        CurrentDay.food.push(this.props.food.id);
        if (this.props.refresh != null)
            this.props.refresh();
        return;
    },
    editfood: function(e) {
        redraw(<CreateFoodPage food={this.props.food} />);
    },
    render: function () {
        return (
            <tr>
                <td>
                    <button onClick={this.addfood} disabled={CurrentDay == null || CurrentDay.archive} className="btn btn-success">+</button>
                </td>
                <td style={{verticalAlign:"middle"}}>
                    <span className="badge">{this.props.count}</span>&nbsp;
                    {this.props.food.name}
                </td>
                <td>
                    <button onClick={this.editfood} className="btn btn-default">
                        <span className="glyphicon glyphicon-cog"></span>
                    </button>
                </td>
            </tr>
        );
    }
})

var FoodItemList = React.createClass({
    refresh: function() {
        this.forceUpdate();
    },
    render: function() {
        var foods = _foods.map(function(food) {
            if (CurrentDay == null)
                return <FoodItem food={food} key={food.name} />

            var count = CurrentDay.food.filter(function(d) {
                return d == food.id;
            }).length;
            return <FoodItem count={count} refresh={this.refresh} food={food} key={food.name} />
        }.bind(this));
        if (CurrentDay != null && CurrentDay.archive) {
            for (var i=0,j=0;i<foods.length;i++,j++)
                if (CurrentDay.food.indexOf(j) < 0)
                    foods.splice(i--, 1);
        }
        return (
                <tbody>
                    {foods}
                </tbody>
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
                <div className="btn-group" style={{display: "flex"}}>
                    <button onClick={this.back} className="btn btn-default">Back</button>
                </div>
                <ReactBootstrap.Table hover style={{width: "1%", whiteSpace: "nowrap"}}>
                    <FoodItemList />
                </ReactBootstrap.Table>
            </div>
        );
    }
})
