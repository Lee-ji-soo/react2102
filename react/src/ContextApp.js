import React from 'react';
import Toolbar from './context/Toolbar';

export const ThemeContext = React.createContext('light');

const ContextApp = () => {
  return (
    <>
      <ThemeContext.Provider value="hellow">
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
};

export default ContextApp;
