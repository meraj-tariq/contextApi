import React, { useState } from 'react';
import './App.css';
// import Counter from './components/counter';
import ThemeContext from './components/contextApi/ThemeContext.js'
import Header from './components/contextApi/Header';
import Main from './components/contextApi/main';

function App() {
  const themeHook = useState("light");
  return (
    // <Counter/>
    <ThemeContext.Provider value={themeHook}>
     <Header/>
     <Main/>
      </ThemeContext.Provider>
  );
}

export default App;
