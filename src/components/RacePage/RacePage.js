import React, { Component } from 'react';
import List from '../List';
import RaceDetailes from '../RaceDetailes';
import ErrorMessage from '../ErrorMessage';
import openDndService from '../../services/dndapi-service';

export default class RacePage extends Component {
  dndApi = new openDndService();

  state = {
    currentRace: 'Human',
    hasError: false
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
    const { currentRace, hasError } = this.state;

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
          getData={this.dndApi.getAllRaces}
          currentValue={currentRace}
          onChangeItem={this.onChangeRace}
          renderItem={(item) => { return item.subraces }} />
        <RaceDetailes
          current={currentRace} />
      </div>
    );
  };
};