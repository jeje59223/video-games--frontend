import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/molecules/NavBar/NavBar';
import Games from './pages/Games/Games';
import Platforms from './pages/Platforms/Platforms';
import FavoritesGames from './pages/FavoritesGames/FavoritesGames';

function App() {
  return (
    <div className="App">
      <NavBar />
          <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/games" element={ <Games/> }/>
              <Route path="/platforms" element={ <Platforms /> } />
              <Route path="/favorites-games" element={ <FavoritesGames /> } />
          </Routes>
    </div>
  );
}

export default App;
