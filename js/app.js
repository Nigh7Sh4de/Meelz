var _props = ["calories", "protein", "carbs", "sugar"];

var _foods = [{
    "name": "Mashed Potatoes",
    "info": {}
}, {
    "name": "Chicken Breast",
    "info": {}
}, {
    "name": "Vegetables",
    "info": {}
}, {
    "name": "Spaghetti",
    "info": {}
}];

var Pages = {
    FoodItemListPage: React.createElement(FoodItemListPage, null),
    CreateFoodPage: React.createElement(CreateFoodPage, null),
    EditInfoPropsPage: React.createElement(EditInfoPropsPage, null)
};

var redraw = function (page) {
    ReactDOM.render(page, document.getElementById('react-app'));
};
redraw(Pages.FoodItemListPage);