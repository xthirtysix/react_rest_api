import React, { Component } from 'react';
import List from '../List';
import RaceDetailes from '../RaceDetailes';
import ErrorMessage from '../ErrorMessage';
import ErrorBoundry from '../ErrorBoundry';
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
      <ErrorBoundry>
        <div>
          <List
            getData={this.dndApi.getAllRaces}
            currentValue={currentRace}
            onChangeItem={this.onChangeRace} >
            {({ name, subraces }) => {
              const optional = subraces ? `(${subraces})` : '';
              return `${name} ${optional}`;
            }}
          </List>
          <RaceDetailes
            current={currentRace} />
        </div>
      </ErrorBoundry>
    );
  };
};