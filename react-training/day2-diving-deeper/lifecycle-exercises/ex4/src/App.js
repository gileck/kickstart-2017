import React, { Component } from 'react';
import TranslationBox from './translationBox';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Wix Translate</h1>

        <div>
          <input type="text" placeholder="English term.." />
          <select value='SomeLanguage'>
            <option value="fr">French</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
        </div>
        
        <TranslationBox targetLanguage="SomeLanguage" term="English term.." />
      </div>
    );
  }
}

export default App;
