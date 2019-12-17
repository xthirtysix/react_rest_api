import React, { Component } from 'react';
import List from '../List';
import ItemDetailes from '../ItemDetailes';
import ErrorBoundry from '../ErrorBoundry';
import openDndService from '../../services/dndapi-service';
import { Record } from '../ItemDetailes/ItemDetailes';

export default class RacePage extends Component {
  dndApi = new openDndService();

  state = {
    currentRace: 'Human'
  };

  onChangeRace = (evt) => {
    this.setState({
      currentRace: evt.target.value
    });
  };

  render() {
    const { currentRace } = this.state;
    const { getAllRaces, getRace } = this.dndApi;

    return (
      < ErrorBoundry >
        <div className="container">
          <List
            getData={getAllRaces}
            currentValue={currentRace}
            onChangeItem={this.onChangeRace} >
            {({ name, subraces }) => {
              const optional = subraces !== 'none' ? `(${subraces})` : '';
              return `${name} ${optional}`;
            }}
          </List>
          <ItemDetailes
            getData={getRace}
            currentValue={currentRace}>
            <Record field="size" label="Size: " />
            <Record field="speed" label="Speed: " />
            <Record field="subraces" label="Subraces: " />
            <Record field="desc" label="Description: " />
          </ItemDetailes>
        </div>
      </ErrorBoundry >
    );
  };
};