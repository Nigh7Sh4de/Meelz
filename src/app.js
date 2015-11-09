var ContainerDiv = React.createClass({
  render: function() {
    return (<h1>HI</h1>);
  }
});

var start = new Date().getTime();

ReactDOM.render(
    <ContainerDiv />,
    document.getElementById('container')
);
