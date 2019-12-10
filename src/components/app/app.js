import React, { Component } from 'react';
import Header from '../Header';
import Random from '../Random';
import List from '../List';
import RaceDetailes from '../RaceDetailes';
import ErrorButton from '../ErrorButton';
import ErrorMessage from '../ErrorMessage';
import RacePage from '../RacePage';

import './App.css';

export default class App extends Component {
  state = {
    spells: [],
    randomSpell: {},
    randomSpellLoading: true,
    randomSpellError: false,
    hasError: false
  };

  getSpells = (spells) => {
    this.setState({ spells })
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

  componentDidCatch() {
    this.setState({ hasError: true });
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

        </div >
      </React.Fragment>
    );
  };
};