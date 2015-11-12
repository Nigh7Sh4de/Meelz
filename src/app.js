var Pages = {
    FoodItemListPage: <FoodItemListPage />,
    CreateFoodPage: <CreateFoodPage />
}

var redraw = function(page) {
    ReactDOM.render(
        page,
        document.getElementById('react-app')
    );
};
redraw(Pages.FoodItemListPage);

