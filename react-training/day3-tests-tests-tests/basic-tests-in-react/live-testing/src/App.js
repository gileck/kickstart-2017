import React, { Component } from 'react';
import wixLogo from './wix-icon.png';
import logo from './logo.svg';
import './App.css';

import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wixLogo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Live Testing Session </h2>
        </div>
        
        <div>
          Component to test goes here...
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
