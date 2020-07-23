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
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/random">FOR ME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

export default AppHeader;
