var Pages = {
    FoodItemListPage: React.createElement(FoodItemListPage, null),
    CreateFoodPage: React.createElement(CreateFoodPage, null)
};

var redraw = function (page) {
    ReactDOM.render(page, document.getElementById('react-app'));
};
redraw(Pages.FoodItemListPage);