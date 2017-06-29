import React, { Component } from 'react';
import './App.css';
import SettingsPanel from './components/settingsPanel';
import Notification from './components/notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exercise 3</h1>
        <h4>componentDidMount &amp; componentWillUnmount</h4>

        <button>Show/Hide Settings</button>

        <SettingsPanel />

        <Notification />
      </div>
    );
  }
}

export default App;
