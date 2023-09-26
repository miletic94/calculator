import React, { useState } from 'react';
import './App.css';
import { ButtonDisplay } from './components/ButtonDisplay';
import { ThemeToggler } from './components/ThemeToggler';

function App() {
  const [expression, setExpression] = useState('')
  const [theme, setTheme] = useState('theme-1')
  return (
    <div className={`App ${theme}`}>
      <body>
      <div className="container">
        <header>
          <div className="logo">
            calc
          </div>
          {ThemeToggler(theme, setTheme)}
        </header>
        <div className="display" data-display> 
          {expression}
        </div>
        {ButtonDisplay({expression, setExpression})}
      </div>
      </body>

    </div>
  );
}

export default App;
