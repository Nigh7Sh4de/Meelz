var _propTypes = ["text", "number"];

var _props = [
// {
//     "name": "name",
//     "type": "text"
// }
"name" //,
// "calories",
// "protein",
// "carbs",
// "sugar"
];

var _days = [{
    "id": 0,
    "food": [0, 1, 2]
}, {
    "id": 1,
    "food": [0]
}, {
    "id": 2,
    "food": [1, 3]
}, {
    "id": 3,
    "food": []
}];

var _foods = [{
    "id": 0,
    "name": "Mashed Potatoes"
}, {
    "id": 1,
    "name": "Chicken Breast"
}, {
    "id": 2,
    "name": "Vegetables"
}, {
    "id": 3,
    "name": "Spaghetti"
}];

var redraw = function (comp) {
    ReactDOM.render(comp, document.getElementById('react-app'));
};
redraw(React.createElement(DaysPage, null));