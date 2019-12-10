import React, { Component } from 'react';
import './RaceDetailes.css';
import openDndService from '../../services/dndapi-service';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';

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
    };
  };

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
  const subracesInfo = subraces
    ? <p className="card-text text-danger">Subraces: {subraces}</p>
    : null;

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
          <p className="card-text text-info">Size: {size}</p>
          <p className="card-text text-success">Speed: {speed}</p>
          {subracesInfo}
        </div>
      </div>
      <p className="card-text card-description p-3">{desc}</p>
      <ErrorButton />
    </React.Fragment>
  );
};