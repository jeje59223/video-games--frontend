import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import NavBar, { pages } from './components/molecules/NavBar/NavBar';

const AppRoute = () => {
  return useRoutes([
    { path: pages[0].url, element: pages[0].element },
    { path: pages[1].url, element: pages[1].element },
    { path: pages[2].url, element: pages[2].element },
    { path: pages[3].url, element: pages[3].element },
  ]);
};

const App = () => {
  return (
    <div className="App">
          <Router>
              <NavBar />
              <AppRoute />
          </Router>
    </div>
  );
};

export default App;
