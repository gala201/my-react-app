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
import Search from "./components/views/Search"
import Add from "./components/views/Add"
import MovieDetails from "./components/views/MovieDetails"



import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppWrap from './components/playground/graphql/AppWrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/playground/Counter';
import { useEffect } from 'react';


export const ThemeContext = React.createContext()
export const MoviesContext = React.createContext()
// webdev199


function App() {

  // napraviti komponentu za podebljani tekst i ispisatu


  const [isThemeDark, setIsThemeDark] = useState(false)

  const handleClick = () => {
    setIsThemeDark(!isThemeDark)
  }

  const [myMovies, setMyMovies] = useState([])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('myWatchlist')) !== null) {
      const myWatchlist = JSON.parse(localStorage.getItem('myWatchlist'));
      setMyMovies(myWatchlist)
    }
  }, [])

  useEffect(() => {
    if (myMovies.length) {
      localStorage.setItem('myWatchlist', JSON.stringify(myMovies))
    }
  }, [myMovies])



  return (
    <Router>
      {/* <ThemeContext.Provider value={isThemeDark}> */}
      <Provider store={store}>
        <MoviesContext.Provider value={{ myMovies, setMyMovies }}>

          <Button onClick={handleClick} variant="contained">Promijeni temu u {isThemeDark ? "Tamnu" : "Svijetlu"}</Button>


          <Header />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detalji/:id" element={<MovieDetails />} />
            <Route path="/hocs" element={<HOCs />} />
            <Route path="/add" element={<Add />} />
            <Route path="/search" element={<Search />} />
            <Route path="/valute" element={<AppWrap />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>


          {/* <Playground />
          <Index />
          <HOCs />
          <Favorites />
          <Footer /> */}
        </MoviesContext.Provider>
      </Provider>
      {/* </ThemeContext.Provider> */}
    </Router>
  );
}

export default App;
