import React, { Component } from 'react';
import List from '../list';
import RaceDetailes from '../race-detailes';
import ErrorMessage from '../error-message';

export default class RacePage extends Component {
  state = {
    races: [],
    currentRace: 'Human',
    hasError: false
  };

  getRaces = (races) => {
    this.setState({ races })
  };

  onChangeRace = (evt) => {
    this.setState({
      currentRace: evt.target.value
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const { races, currentRace, hasError } = this.state;

    if (hasError) {
      return (
        <section className="card w-100">
          <ErrorMessage />
        </section>
      );
    };

    return (
      <div>
        <List
          races={races}
          currentRace={currentRace}
          onChangeRace={this.onChangeRace}
          getRaces={this.getRaces} />
        <RaceDetailes current={currentRace} />
      </div>
    );
  };
};