import React from 'react';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>D&D Database</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item"><a className="nav-link active" href="index.html">Races</a></li>
        <li className="nav-item"><a className="nav-link" href="index.html">Classes</a></li>
        <li className="nav-item"><a className="nav-link" href="index.html">Spells</a></li>
      </ul>
    </div>
  );
};

export default Header;