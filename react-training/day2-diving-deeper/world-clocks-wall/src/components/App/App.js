import React from 'react';
import AddClock from '../AddClock/AddClock'
import Clocks from '../Clocks/Clocks'
import * as s from './App.scss';

const generateId = (function () {
    let id = 0;
    return function() {
        id++;
        return id;
    }
})();

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clocks: [
                {"city": "Jerusalem","zone": 2, "id": 123123},{"city": "New York", "zone": 5, "id": 24234}, {"city": "London", "zone": 9, "id": 167453},
                {"city": "Tel Aviv","zone": 3, "id": 163113},{"city": "Los Angeles", "zone": 3, "id": 26234},{"city": "Munich", "zone": 2, "id": 16732513}
            ]
        }
    }

    onEditClock({city,id}) {
        if (!city) return;
        const index = this.state.clocks.findIndex(item => item.id === id);
        const newClocks = this.state.clocks.slice();
        newClocks[index] = {...newClocks[index], city: city};
        this.setState({clocks: newClocks});
    }

    onRemoveClock(clock) {
        const index = this.state.clocks.findIndex(item => item.id === clock.id);
        const newClocks = this.state.clocks.slice();
        newClocks.splice(index,1);
        this.setState({clocks: newClocks});
    }

    onAddClock(clock) {
        clock.id = generateId();
        this.setState({clocks: [clock, ...this.state.clocks]});
    }

    render() {
        return (
            <div>
                <h1>World Clock</h1>
                <AddClock onAddClock={(clock) => this.onAddClock(clock)} />
                <Clocks clocks={this.state.clocks}
                        onEdit={(clock) => this.onEditClock(clock)}
                        onRemove={(clock) => this.onRemoveClock(clock)}/>
            </div>)
    }
}









