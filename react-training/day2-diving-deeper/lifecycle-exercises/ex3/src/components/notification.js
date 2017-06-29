import React, {Component} from 'react';

class Notification extends Component {
    render() {
        return (
            <div className="notification">
                <p>
                    This shows 5 seconds after the Settings panel was opened.
                </p>
            </div>
        );
    }
}

export default Notification;