import React, { Component } from 'react';
import openDndService from '../../services/dndapi-service';
import Spinner from '../spinner/';
import ErrorMessage from '../error-message/'
import './random.css';

export default class Random extends Component {
  dndApi = new openDndService();

  componentDidMount() {
    this.dndApi
      .getAllSpells()
      .then((items) => {
        this.props.getSpells(items);
        this.props.getRandomSpell();
      })
      .catch(this.props.onError);
  };

  render() {
    const { loading, error } = this.props;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <SpellView spell={this.props.randomSpell} /> : null;

    return (
      <section className="card mb-3">
        {errorMessage}
        {spinner}
        {content}
      </section >
    );
  };
};

const SpellView = ({ spell }) => {
  const {
    name, level, school,
    classes, range, castingTime,
    duration, components, description
  } = spell;

  return (
    <React.Fragment>
      <div className="card">
        <h3 className="card-header w-100">{name}</h3>
        <div className="card-body">
          <img
            className="card-img race-img"
            src={`/img/${school}.png`}
            width="130"
            height="190"
            alt="spell school logo" />
          <span className="card-text btn btn-info m-1 text-left">{level} {school} ({classes})</span>
          <span className="card-text btn btn-primary m-1 text-left">Range: {range}</span>
          <span className="card-text btn btn-success mr-1text-left">Casting time: {castingTime}</span>
          <span className="card-text btn btn-secondary m-1 text-left">Duration: {duration}</span>
          <span className="card-text btn btn-warning m-1 text-left">Components: {components}</span>
          <p className="card-text p-2 w-100">{description}</p>
        </div>
        <div className="card-img-container"></div>
      </div>
    </React.Fragment>
  );
};