import React from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>Helloo Woeoeoeoeoeo</div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
