var _days = [];

var _props = ["name", "calories", "protein", "carbs", "sugar"];

var _foods = [{
    "name": "Mashed Potatoes",
    "calories": "123"
}, {
    "name": "Chicken Breast"
}, {
    "name": "Vegetables"
}, {
    "name": "Spaghetti"
}];

var Pages = {
    FoodItemListPage: FoodItemListPage, //<FoodItemListPage />,
    CreateFoodPage: CreateFoodPage, //<CreateFoodPage />,
    EditInfoPropsPage: EditInfoPropsPage //<EditInfoPropsPage />
};

var redraw = function (comp) {
    // var comp = (<{page} />);
    // if (props != null)
    //     comp = <{page} props={props} />
    ReactDOM.render(comp, document.getElementById('react-app'));
};
redraw(React.createElement(FoodItemListPage, null));