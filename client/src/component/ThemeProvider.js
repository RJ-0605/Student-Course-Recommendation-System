import React, { createContext, useState } from 'react';

export const Theme = createContext("light");

export default function ThemeProvider( { children } ) {

  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <Theme.Provider value={[currentTheme, setCurrentTheme]}>
      { children }
    </Theme.Provider>
  )
}
