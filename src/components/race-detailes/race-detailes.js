import React, { Component } from 'react';

export default class RaceDetailes extends Component {
  render() {
    return (
      <section className="card w-100">
        <div className="d-flex">
          <div>
            <img
              className="card-img"
              src="img/dwarf.png"
              width="130"
              height="190"
              alt="Description" />
          </div>
          <div className="card-body">
            <h3 className="card-title">Dwarf</h3>
            <p className="card-text">Dwarf is short</p>
          </div>
        </div>
      </section>
    );
  };
};