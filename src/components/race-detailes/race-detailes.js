import React, { Component } from 'react';
import './race-detailes.css';
import openDndService from '../../services/dndapi-service';

export default class RaceDetailes extends Component {
  dndApi = new openDndService();

  state = {
    race: {}
  };


  constructor() {
    super();
    this.getRace();
  };

  onRaceChange = (race) => {
    this.setState({ race });
  };

  getRace() {
    this.dndApi.getRace('dwarf').then(this.onRaceChange);
  };

  render() {
    const { current } = this.props;
    const { race: { name, size, speed, subraces, desc } } = this.state;

    return (
      <section className="card card-race flex-grow-1 mb-3">
        <div className="d-flex flex-wrap">
          <div>
            <img
              className="card-img"
              src={`img/${current}.png`}
              width="130"
              height="190"
              alt="Description" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Size: {size}</p>
            <p className="card-text">Speed: {speed}</p>
            <p className="card-text">Subraces: {subraces}</p>
          </div>
        </div>
        <p className="card-text card-description p-3">{desc}</p>
      </section>
    );
  };
};