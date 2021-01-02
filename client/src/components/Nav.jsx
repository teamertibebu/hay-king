import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home </Link>
      <Link to="/login">Login </Link>
    </div>
  );
};

export default Navbar;
