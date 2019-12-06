import React, { Component } from 'react';
import Header from "../header";
import Random from "../random";
import List from "../list";
import RaceDetailes from "../race-detailes";

export default class App extends Component {
  state = {
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
    return (
      <div className="container">
        <Header />
        <Random />
        <div className="d-flex justify-content-between">
          <List
            className="w-100"
            racesList={this.state.races}
            currentRace={this.state.currentRace}
            onClickRace={this.onClickRace}
            getRaces={this.getRaces} />
          <RaceDetailes
            className="flex-shrink-1"
            current={this.state.current} />
        </div>
      </div >
    );
  };
};