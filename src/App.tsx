import React, { useState } from 'react';
import './App.css';
import { ButtonDisplay } from './components/ButtonDisplay';
import { ThemeToggler } from './components/ThemeToggler';
import { Display } from './components/Display';
import { Logo } from './components/Logo';

function App() {
  const [expression, setExpression] = useState('')
  const [theme, setTheme] = useState('theme-1')
  return (
    <div className={`App ${theme}`}>
      <body>
        <div className="container">
          <header>
            {Logo()}
            {ThemeToggler(theme, setTheme)}
          </header>
          {Display(expression) }
          {ButtonDisplay({expression, setExpression})}
        </div>
      </body>

    </div>
  );
}

export default App;
