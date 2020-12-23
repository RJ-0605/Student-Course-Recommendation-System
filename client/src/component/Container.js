import React, { useContext } from 'react';
import { Theme } from './ThemeProvider';

export default function Container( { children } ) {

  const  currentTheme = useContext(Theme)[0];

  return (
    <div className={`center-container-content container-${currentTheme} pt-5 pb-5`}>

      <div className="container">
        { children }
      </div>

    </div>
  )
}