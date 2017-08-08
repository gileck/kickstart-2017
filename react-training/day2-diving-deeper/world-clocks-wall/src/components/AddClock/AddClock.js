import React from 'react';

export default class AddClock extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            zone: 0
        }
    }

    onChangeCity(e) {
        this.setState({city: e.target.value});
    }

    onChangeZone(e) {
        this.setState({zone: e.target.value});
    }

    add() {
        this.props.onAddClock({city: this.state.city, zone: this.state.zone});
        this.setState({city: "", zone: 0});
    }

    render() {
        return(<div>Add a Clock
            <input className="add-clock-input" placeholder="City Name" onChange={(e) => this.onChangeCity(e)} value={this.state.city} />
            <input className="add-clock-time-zone" type="number" placeholder="Time Zone" onChange={(e) => this.onChangeZone(e)} value={this.state.zone} />
            <button className="add-btn" onClick={() => this.add()}>Add Clock</button>
        </div>);
    }
}
