import React, { Component } from "react";
import PropTypes from "prop-types";

import OpenDndService from "../../services/dndapi-service";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import "./Random.css";

export default class Random extends Component {
  dndApi = new OpenDndService();

  componentDidMount() {
    const { getSpells, getRandomSpell, onError } = this.props;
    this.dndApi
      .getAllSpells()
      .then(items => {
        getSpells(items);
        getRandomSpell();
      })
      .catch(onError);
  }

  render() {
    const { loading, error, randomSpell } = this.props;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <SpellView spell={randomSpell} />
    ) : null;

    return (
      <section className="card mb-3">
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  }
}

Random.propTypes = {
  getSpells: PropTypes.func.isRequired,
  getRandomSpell: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  randomSpell: PropTypes.func.isRequired,
};

const SpellView = ({ spell }) => {
  const {
    name,
    level,
    school,
    classes,
    range,
    castingTime,
    duration,
    components,
    description,
  } = spell;

  return (
    <>
      <div className="card">
        <h3 className="card-header w-100">{name}</h3>
        <div className="card-body">
          <img
            className="card-img race-img"
            src={`/img/${school}.png`}
            width="130"
            height="190"
            alt="spell school logo"
          />
          <span className="card-text btn btn-info m-1 text-left">
            {level} {school} ({classes})
          </span>
          <span className="card-text btn btn-primary m-1 text-left">
            Range: {range}
          </span>
          <span className="card-text btn btn-success mr-1text-left">
            Casting time: {castingTime}
          </span>
          <span className="card-text btn btn-secondary m-1 text-left">
            Duration: {duration}
          </span>
          <span className="card-text btn btn-warning m-1 text-left">
            Components: {components}
          </span>
          <p className="card-text p-2 w-100">{description}</p>
        </div>
        <div className="card-img-container" />
      </div>
    </>
  );
};

SpellView.propTypes = {
  spell: PropTypes.objectOf(
    PropTypes.oneOf(PropTypes.string, PropTypes.number)
  ).isRequired,
};
