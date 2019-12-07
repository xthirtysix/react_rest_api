import React, { Component } from 'react';
import './race-detailes.css';
import openDndService from '../../services/dndapi-service';
import Spinner from '../spinner/';

export default class RaceDetailes extends Component {
  dndApi = new openDndService();

  state = {
    race: '',
    loading: true
  };

  componentDidMount() {
    this.getRace();
  };

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      this.getRace();
    }
  }

  getRace() {
    const race = this.props.current.toLowerCase();

    this.dndApi
      .getRace(race)
      .then((race) => {
        this.setState({
          race,
          loading: false
        });
      });
  };

  render() {
    const { race, loading } = this.state;

    const content = loading ? <Spinner /> : <RaceView race={race} />

    return (
      <section className="card card-race flex-grow-1 mb-3">
        {content}
      </section>
    );
  };
};

const RaceView = ({ race }) => {
  const { name, size, speed, subraces, desc } = race;

  return (
    <React.Fragment>
      <div className="d-flex flex-wrap p-2">
        <div>
          <img
            className="card-img"
            src={`img/${name}.png`}
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