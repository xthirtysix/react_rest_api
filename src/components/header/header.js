import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="#">D&D Database</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li>
            <a
              className="nav-item nav-link active"
              href="#">
              Races<span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#">Classes</a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#">Spells</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;