import React, { Component } from 'react';

export default class Random extends Component {
  render() {
    return (
      <section className="card mb-3">
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <h3 className="card-title">Acid Arrow</h3>
            <p className="card-text">Here's the spell from D&D Players Guide.</p>
            <p className="card-text">Кириллический шрифт.</p>
          </div>
          <div>
            <img
              className="card-img"
              src="/img/evocation.png"
              width="130"
              height="190"
              alt="spell school logo" />
          </div>
        </div>
      </section >
    );
  };
};