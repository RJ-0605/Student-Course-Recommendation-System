import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Button() {

  const themeContext = useContext(ThemeContext)

  function toggleTheme() {
  
    if (themeContext[0] === "light")
        themeContext[1]("dark");
    else 
        themeContext[1]("light")
  
  }

  return    <button onClick={ toggleTheme } >
                 Change 
            </button>


  
}

export default Button;