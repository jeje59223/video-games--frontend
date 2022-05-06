import React from 'react';
import './App.css';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/molecules/NavBar/NavBar';
import Games from './pages/Games/Games';
import Platforms from './pages/Platforms/Platforms';
import FavoritesGames from './pages/FavoritesGames/FavoritesGames';

const AppRoute = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/games', element: <Games /> },
    { path: '/platforms', element: <Platforms /> },
    { path: '/favorites-games', element: <FavoritesGames /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div className="App">
      <NavBar />
          <Router>
              <AppRoute />
          </Router>
    </div>
  );
};

export default App;
