import React, { useContext } from 'react';
import { Theme } from './ThemeProvider';

export default function ToggleTheme() {

  const themeContext = useContext(Theme);

  function setLightTheme() {
    themeContext[1]("light");
  } 

  

  function setDarkTheme() {
    themeContext[1]("dark");
  }

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="toggle-btn btn btn-secondary active shadow-none" onClick={setLightTheme}>
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Light
      </label>
      <label className="toggle-btn btn btn-secondary shadow-none" onClick={setDarkTheme}>
        <input type="radio" name="options" id="option2" autoComplete="off" />Dark
      </label>
    </div>
  )
}
