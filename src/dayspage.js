var CurrentDay = _days[_days.length-1];

var GetTotal = function(prop, dayId) {
    var day = _days.findById(dayId);
    var total = 0;
    day.food.forEach(function (foodId) {
        var food = _foods.findById(foodId);
        total += food[prop] || 0;
    });
    return total;
}

var DayItem = React.createClass({
    viewfood: function() {
        CurrentDay = _days.findById(this.props.id);
        redraw(FoodItemListPage)
    },
    render: function() {
        var totals = _settings.home_cols.map(function(c) {
            var t =  GetTotal(c, this.props.id);
            return (<td key={c}>{t}</td>);
        }.bind(this));
        return (
            <tr key={this.props.id}>
                <td>
                    <button onClick={this.viewfood} className="btn btn-default"><span className="glyphicon glyphicon-tasks"></span></button>
                </td>
                <td>
                    {this.props.date}
                </td>
                {totals}
            </tr>
        );
    }
})


var DayToday = React.createClass({
    addfood: function() {
        CurrentDay = _days.findById(this.props.id);
        redraw(FoodItemListPage);
    },
    render: function() {
        var totals = _settings.home_cols.map(function(c) {
            var t =  GetTotal(c, this.props.id);
            return (<td key={c}>{t}</td>);
        }.bind(this));
        return (
            <tr key={this.props.id}>
                <td>
                    <button onClick={this.addfood} className="btn btn-success"><span className="glyphicon glyphicon-plus"></span></button>
                </td>
                <td>
                    {this.props.date}
                </td>
                {totals}
            </tr>
        );
    }
});

var DaysPage = React.createClass({
    getnav: function(dayspage) {
        var dayspage = this;

        var DaysPageNav = React.createClass({
            viewfood: function() {
                CurrentDay = null;
                redraw(FoodItemListPage);
            },
            showsettings: function(e) {
                redraw(EditInfoPropsPage);

            },
            createday: function(e) {
                if (e.target.id != "override" && CurrentDay.date == new Date().toDateString()) {
                    this.open();
                    return;
                }
                CurrentDay["archive"] = true;
                 _days.push(CurrentDay = {
                    id: _days.generateId(),
                    food: [],
                    date: new Date().toDateString()
                });
                this.close();
                dayspage.forceUpdate();
                // redraw(DaysPage);
            },
            open: function() {
                this.setState({showModal: true});
            },
            close: function() {
                this.setState({showModal: false});
            },
            getInitialState: function() {
                return ({showModal: false});
            },
            render: function() {
                return (
                    <div>
                        <ul className="nav navbar-nav">
                            <li key="nd" onClick={this.createday}><a href="#"><span className="glyphicon glyphicon-plus"></span> Day</a></li>
                            <li key="vf" onClick={this.viewfood}><a href="#">View Food</a></li>
                            <li key="ss" onClick={this.showsettings}><a href="#"><span className="glyphicon glyphicon-cog"></span></a></li>
                        </ul>

                        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}>
                            <ReactBootstrap.Modal.Body>
                                <h4>Confirm new day</h4>
                                <p>You already made a new day today. Are you sure you want to generate a new day with today&#39;s date?</p>
                            </ReactBootstrap.Modal.Body>
                            <ReactBootstrap.Modal.Footer>
                                <button className="btn btn-warning" id="override" onClick={this.createday}>Confirm</button>
                                <button className="btn btn-default" onClick={this.close}>Close</button>
                            </ReactBootstrap.Modal.Footer>
                        </ReactBootstrap.Modal>
                    </div>
                );
            }
        });
        return <DaysPageNav />;
    },
    render: function() {


        CurrentDay = _days[_days.length-1];
        var c = 1;
        var days = _days.map(function(d) {
            if (c++ < _days.length)
                return <DayItem date={d.date} total={d.total} id={d.id} key={d.id} />
            else {
                return <DayToday date={d.date} total={d.total} id={d.id} key={d.id} />
            }
        }.bind(this)).reverse();

        var home_cols = _settings.home_cols.map(function(c) {
            return (<th key={c}>{c}</th>);
        });

        return (
            <div>
                <ReactBootstrap.Table responsive hover style={{width:"1%", whiteSpace:"nowrap"}}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            {home_cols}
                        </tr>
                    </thead>
                    <tbody>
                        {days}
                    </tbody>
                </ReactBootstrap.Table>


            </div>
        );
    }
});
