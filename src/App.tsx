import React from 'react';
import './App.css';
import { shuntingYard } from './driver/shunting-yard';

function App() {
  const result = shuntingYard('3 * 4 - 2 * ( 2 + ( 2 + 1 ) )')
  return (
    <div className="App">
      <h1>Result: {result.map(res => `${res}, `)}</h1>
    </div>
  );
}

export default App;
