import React from 'react';

export default class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            editText: "",
            currentTime: new Date()
        };

        this.interval = setInterval(() => {
            this.setState({currentTime: new Date()})
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.clock.city !== this.props.clock.city ||
            nextProps.clock.zone !== this.props.clock.zone ||
            this.state.edit !== nextState.edit ||
            this.state.currentTime !== nextState.currentTime;
    }

    openEdit() {
        this.setState({edit: true});
    }

    edit() {
        this.props.onEdit({city: this.state.editText,id: this.props.clock.id});
        this.setState({edit: false, editText: ""});
    }

    onEditChange(e) {
        console.log(e.target.value);
        this.setState({editText: e.target.value})
    }

    showTime() {
        const newTime = this.state.currentTime.getTime() + this.props.clock.zone * 3600000;
        return new Date(newTime).toTimeString().replace("GMT+0300 (IDT)","");
    }

    render() {
        const hideOnEdit = {display:  this.state.edit ? "none": "inline"};
        const showOnEdit = {display: !this.state.edit ? "none": "inline"};
        return(<div className="clock-box">

            <div className="time">{this.showTime()}</div>
            <label className="city-name" style={hideOnEdit}>{this.props.clock.city}</label>
            <input  className="edit-input" style={showOnEdit} onChange={(e) => this.onEditChange(e)} placeholder="Edit Name"/>
            <button className="done-btn" style={showOnEdit} onClick={() => this.edit()}>Done</button>

            <div>
                <button style={hideOnEdit} className="remove-button" onClick={() => this.props.onRemove(this.props.clock)}>Remove</button>
                <button className="edit-btn" style={hideOnEdit} onClick={() => this.openEdit()}>Edit</button>
            </div>
        </div>);
    }
}
