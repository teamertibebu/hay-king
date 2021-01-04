import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
