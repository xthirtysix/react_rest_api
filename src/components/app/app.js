import React, { Component } from 'react';
import Header from "../header";
import Random from "../random";
import List from "../list";
import RaceDetailes from "../race-detailes";

export default class App extends Component {
  state = {
    spells: [],
    races: [],
    currentRace: 'Dwarf'
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

  render() {
    const { spells, races, currentRace } = this.state;

    return (
      <div className="container">
        <Header />
        <Random spells={spells} />
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
    );
  };
};