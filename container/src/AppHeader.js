import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Read me</h1>
      <nav>
        <ol>
          <li>
            <NavLink to="/">Browse books</NavLink>
          </li>
          <li>
            <NavLink to="/random">For me</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

export default AppHeader;
