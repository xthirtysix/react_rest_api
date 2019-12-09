import React, { Component } from 'react';
import Header from "../header";
import Random from "../random";
import List from "../list";
import RaceDetailes from "../race-detailes";

export default class App extends Component {
  state = {
    spells: [],
    randomSpell: {},
    randomSpellLoading: true,
    randomSpellError: false,
    races: [],
    currentRace: 'Dwarf'
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

  getRaces = (races) => {
    this.setState({ races })
  };

  onClickRace = (evt) => {
    evt.preventDefault();
    this.setState({
      currentRace: evt.target.innerText
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
      randomSpellError, races, currentRace } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Random
            spells={spells}
            getSpells={this.getSpells}
            randomSpell={randomSpell}
            loading={randomSpellLoading}
            error={randomSpellError}
            onError={this.onRandomSpellError}
            getRandomSpell={this.getRandomSpell} />
          <div className="d-flex justify-content-between">
            <List
              className="w-100"
              racesList={races}
              currentRace={currentRace}
              onClickRace={this.onClickRace}
              getRaces={this.getRaces} />
            <RaceDetailes
              className="flex-shrink-1"
              current={currentRace} />
          </div>
        </div >
      </React.Fragment>
    );
  };
};