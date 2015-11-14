var redraw = function (comp) {
    ReactDOM.render(comp, document.getElementById('react-app'));
};
redraw(React.createElement(DaysPage, null));