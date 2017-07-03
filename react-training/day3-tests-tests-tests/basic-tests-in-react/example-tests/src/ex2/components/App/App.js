import React from 'react';
import s from './App.scss';

import Title from '../title';

function App() {
  return (
    <div className={s.root}>
      <Title text="Hello React TestUtils!"/>
    </div>
  );
}

export default App;
