import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import NavBar, { pages } from './components/molecules/NavBar/NavBar';

const routes = pages.map((page) => ({ path: page.url, element: page.element }));

const AppRoute = () => {
  return useRoutes(routes);
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
