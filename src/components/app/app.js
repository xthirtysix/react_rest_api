import React, { Component } from 'react';
import Header from '../header';
import Random from '../random';
import List from '../list';
import RaceDetailes from '../race-detailes';
import ErrorButton from '../error-button';
import ErrorMessage from '../error-message';
import RacePage from '../race-page/race-page';

import './app.css';

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