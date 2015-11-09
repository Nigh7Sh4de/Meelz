var ContainerDiv = React.createClass({
  render: function () {
    return React.createElement(
      'h1',
      null,
      'HI'
    );
  }
});

ReactDOM.render(React.createElement(ContainerDiv, null), document.getElementById('container'));
