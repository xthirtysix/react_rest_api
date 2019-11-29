import React from 'react';

const List = () => {
  return (
    <ul className="nav nav-pills flex-column mr-4">
      <li className="nav-item"><a className="nav-link active" href="index.html">Dwarf</a></li>
      <li className="nav-item"><a className="nav-link" href="index.html">Elf</a></li>
      <li className="nav-item"><a className="nav-link" href="index.html">Human</a></li>
    </ul>
  );
};

export default List;