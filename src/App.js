import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Index from './components/views/Index';
import Favorites from './components/views/Favorites';
import './styles/styles.css'
import Playground from './components/playground/Playground';
import { useState } from 'react';
import React from 'react';
import HOCs from "./components/playground/HOCs";

import Button from '@mui/material/Button';
export const ThemeContext = React.createContext()
// webdev199


function App() {

  // napraviti komponentu za podebljani tekst i ispisatu


  const [isThemeDark, setIsThemeDark] = useState(false)

  const handleClick = () => {
    setIsThemeDark(!isThemeDark)
  }



  return (
    <ThemeContext.Provider value={isThemeDark}>
      <>
        <Button onClick={handleClick} variant="contained">Promijeni temu u {isThemeDark ? "Tamnu" : "Svijetlu"}</Button>

        <Header />
        {/* <Playground /> */}
        {/* <Index /> */}
        <HOCs />
        {/* <Favorites /> */}
        {/* <Footer /> */}


      </>
    </ThemeContext.Provider>
  );
}

export default App;
