import React, { useContext } from 'react';
import { Theme } from './ThemeProvider';

export default function Footer() {

  const currentTheme = useContext(Theme)[0];

  return (
    <div className={`footer text-center py-5 bg-${currentTheme} text-${currentTheme}`}>
      <div className="container">
        <p className="text-muted">© Copyright 2020 rojedkay@gmail.com</p>
      </div>
    </div>
  )
}