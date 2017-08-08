import React from 'react';
import Clock from '../Clock/Clock'


export default class Clocks extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(<ul className="clocks-wrapper">
            {this.props.clocks.map((item) => <li key={item.id}>
                <Clock
                clock={item}
                key={item.id}
                onEdit={this.props.onEdit}
                onRemove={this.props.onRemove} />
            </li>)}
        </ul>);
    }
}
