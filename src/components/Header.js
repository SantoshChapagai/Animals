import React from 'react';
import { NavLink } from 'react-router-dom';
import './component.css'

const Header = (props) => {
  return (
    <header>
      <nav>
        <h1>{props.type.title}</h1>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals" activeClassName="active">Animals({props.type.animals.length}) </NavLink>
          </li>
          <li>
            <NavLink to="/birds" activeClassName="active">Birds({props.type.birds.length})</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;