import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Random.css";
import Spinner from "../Spinner";
import ErrorBoundry from "../ErrorBoundry";
import OpenDndService from "../../services/dndapi-service";

export default class Random extends Component {
  dndApi = new OpenDndService();

  constructor() {
    super();
    this.state = {
      spells: [],
      randomSpell: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.dndApi.getAllSpells().then(items => {
      this.getSpells(items);
      this.getRandomSpell();
      this.setState({
        loading: false,
      });
    });
  }

  getSpells = spells => {
    this.setState({ spells });
  };

  getRandomSpell = () => {
    const { spells } = this.state;

    const id = Math.floor(Math.random() * spells.length);
    this.setState({
      randomSpell: spells[id],
    });
  };

  render() {
    const { loading, randomSpell } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <section className="card mb-3">
        <ErrorBoundry>
          <SpellView spell={randomSpell} />
        </ErrorBoundry>
      </section>
    );
  }
}

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
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};
