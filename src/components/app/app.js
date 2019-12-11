import React, { Component } from 'react';
import Header from '../Header';
import Random from '../Random';
import List from '../List';
import RaceDetailes from '../RaceDetailes';
import ErrorButton from '../ErrorButton';
import ErrorMessage from '../ErrorMessage';
import RacePage from '../RacePage';

import './App.css';
import openDndService from '../../services/dndapi-service';
import ErrorBoundry from '../ErrorBoundry';

export default class App extends Component {
  dndApi = new openDndService();

  state = {
    spells: [],
    randomSpell: {},
    clazz: 'Wizard',
    randomSpellLoading: true,
    randomSpellError: false
  };

  getSpells = (spells) => {
    this.setState({ spells })
  };

  onClassChange = (evt) => {
    this.setState({
      clazz: evt.target.value
    });
  };

  getRandomSpell = () => {
    const { spells } = this.state;

    const id = Math.floor(Math.random() * spells.length);
    this.setState({
      randomSpell: spells[id],
      randomSpellLoading: false
    });
  };

  onRandomSpellError = () => {
    this.setState({
      randomSpellLoading: false,
      randomSpellError: true
    });
  };

  render() {
    const { spells, randomSpell, randomSpellLoading,
      randomSpellError, hasError } = this.state;

    if (hasError) {
      return (
        <div className="container">
          <section className="card mt-5">
            <ErrorMessage />
          </section>
        </div >
      );
    };

    return (
      <React.Fragment>
        <Header />
        <ErrorBoundry>

          <div className="container">
            <List
              getData={this.dndApi.getAllClasses}
              onChangeItem={this.onClassChange}
              currentValue={this.state.clazz}>
              {({ name, archetypes }) => {
                const optional = archetypes ? `(${archetypes})` : '';
                return `${name} ${optional}`;
              }}
            </List>
          </div>

          <div className="container container-main d-flex">

            <div className="race-container">
              <RacePage>
                <List />
                <RaceDetailes />
              </RacePage>
              <ErrorButton />
            </div>

            <aside className="random-container">
              <Random
                spells={spells}
                getSpells={this.getSpells}
                randomSpell={randomSpell}
                loading={randomSpellLoading}
                error={randomSpellError}
                onError={this.onRandomSpellError}
                getRandomSpell={this.getRandomSpell} />
            </aside>

          </div>

        </ErrorBoundry>
      </React.Fragment>
    );
  };
};