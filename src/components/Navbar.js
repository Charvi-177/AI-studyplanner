import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📘 Study Planner</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/tracker">Tracker</Link>
      </div>
    </nav>
  );
}

export default Navbar;
