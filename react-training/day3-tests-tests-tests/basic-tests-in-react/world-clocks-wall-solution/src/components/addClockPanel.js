import React, {Component} from 'react';
import Location from '../location';
import {bindAll} from '../helper';

class AddClockPanel extends Component {
    
    constructor() {
        super();
        this.state = this.getEmptyState();
        
        bindAll(this, [this.onAddClock, this.updateCityName, this.updateTimeZone]);
    }

    getEmptyState() {
        return {
            name: '',
            timeZone: 0
        };
    }

    onAddClock() {
        this.props.onAdd(Location(this.state.name, this.state.timeZone));
        this.setState(this.getEmptyState(), () => {
            this.locationRef.focus();
        });
    }

    updateCityName(e) {
        this.setState({
            name: e.target.value
        });
    }

    updateTimeZone(e) {
        this.setState({
            timeZone: Number(e.target.value)
        });
    }
    
    render() {
        return <div>
                <h4>Add a Clock</h4>
                <div>
                    <label htmlFor="locationName">
                        <input id="locationName" placeholder="City Name" type="text" 
                                ref={input => this.locationRef = input} value={this.state.name} onChange={this.updateCityName} />
                    </label>
                    <label htmlFor="locationTZ">TimeZone
                        <input type="number" id="locationTZ" onChange={this.updateTimeZone} value={this.state.timeZone} />
                    </label>
                    <button onClick={this.onAddClock}>Add Clock</button>
                </div>
            </div>;
    }
}

export default AddClockPanel;