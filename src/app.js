var _props = [
    "calories",
    "protein",
    "carbs",
    "sugar"
]

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


var Pages = {
    FoodItemListPage: <FoodItemListPage />,
    CreateFoodPage: <CreateFoodPage />,
    EditInfoPropsPage: <EditInfoPropsPage />
}

var redraw = function(page) {
    ReactDOM.render(
        page,
        document.getElementById('react-app')
    );
};
redraw(Pages.FoodItemListPage);
