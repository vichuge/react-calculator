import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="Navbar">
    <h1>Math Magicians!</h1>
    <p>
      <Link to="/">Home </Link>
      |
      <Link to="/calc">Calculator </Link>
      |
      <Link to="/quote">Quote </Link>
    </p>
  </div>
);

export default Navbar;
