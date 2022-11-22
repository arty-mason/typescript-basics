import React from "react";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <NavLink to="/" className="brand-logo">
          React + Typescript
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">TODO</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
