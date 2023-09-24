import React from 'react';
import './App.css';
import { shuntingYard } from './driver/shunting-yard';
import { buildASTFromRPN, evaluateAST } from './driver/abstract-syntax-tree';

function App() {
  const result = evaluateAST(buildASTFromRPN(shuntingYard('3 * 4 - 2 * ( 2 + ( 2 + 1 ) )')))
  return (
    <div className="App">
      <h1>Result: {result}</h1>
    </div>
  );
}

export default App;
