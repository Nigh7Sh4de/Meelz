var _days = [{
    "id": 0,
    "food": [0, 1, 2],
    "total": [{
        "name": "calories",
        "value": 123
    }]
}, {
    "id": 1,
    "food": [0],
    "total": []
}, {
    "id": 2,
    "food": [0, 3],
    "total": [{
        "name": "calories",
        "value": 5
    }]
}];

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

var redraw = function (comp) {
    ReactDOM.render(comp, document.getElementById('react-app'));
};
redraw(React.createElement(DaysPage, null));