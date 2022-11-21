import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">TODO</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
