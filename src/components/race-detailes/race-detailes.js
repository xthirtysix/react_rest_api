import React, { Component } from 'react';
import './race-detailes.css';
import openDndService from '../../services/dndapi-service';
import Spinner from '../spinner/';

export default class RaceDetailes extends Component {
  dndApi = new openDndService();

  state = {
    race: {},
    loading: true
  };

  constructor() {
    super();
    this.getRace();
  };

  onRaceChange = (race) => {
    this.setState({ race, loading: false });
  };

  getRace() {
    this.dndApi.getRace('dwarf').then(this.onRaceChange);
  };

  render() {
    const { race, loading } = this.state;
    const { current } = this.props;

    const content = loading ? <Spinner /> : <RaceView race={race} current={current} />

    return (
      <section className="card card-race flex-grow-1 mb-3">
        {content}
      </section>
    );
  };
};

const RaceView = ({ race, current }) => {
  const { name, size, speed, subraces, desc } = race;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};