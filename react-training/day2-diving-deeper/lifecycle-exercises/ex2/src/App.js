import React, { Component } from 'react';
import './App.css';

class Item extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value;
    }

    render() {
    console.log('Rendering Item', this.props.value);
    return <div>{this.props.value}</div>;
  }
}


class List extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.list.length !== this.props.list.length;
    }

    render() {
        return (
            <ul>
                {this.props.list.map(item => <Item key={item} value={item} />)}
            </ul>
        )};
};


class ListApp extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      items: Array(10000).fill(1).map((v, i) => `Item ${i+1}`)
    }
  }

  addItem() {
    if (this.state.userInput) {
      const updatedItems = [this.state.userInput].concat(this.state.items);
      this.setState({items: updatedItems}, ()=> {
        this.setState({userInput: ''});
      });
    }
  }

    updateUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          Enter new Item:
          <input type="text" value={this.state.userInput} onChange={(e) => this.updateUserInput(e)} />
          <button onClick={e => this.addItem()}>Add</button>
        </div>
       <List list={this.state.items} />
      </div>
    );
  }
}

export default ListApp;

