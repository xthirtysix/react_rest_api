import React from 'react';

const List = ({ races, current }) => {
  const items = races.map((race) => {
    const capitalizedRace = race.charAt(0).toUpperCase() + race.slice(1);
    const isActive = race === current;
    const cssClass = isActive ? 'active' : null;

    return (
      <li className="nav-item" key={race}>
        <a className={`nav-link ${cssClass}`} href="#">
          {capitalizedRace}
        </a>
      </li>
    );
  });

  return (
    <ul className="nav nav-pills flex-column mr-4">
      {items}
    </ul>
  );
};

export default List;