import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="index.html">
        D&D Database
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <ul className="navbar-nav">
          <li>
            <a className="nav-item nav-link active" href="index.html">
              Races<span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="index.html">
              Classes
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="index.html">
              Spells
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
