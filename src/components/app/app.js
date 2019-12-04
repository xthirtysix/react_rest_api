import React, { Component } from 'react';
import Header from "../header";
import Random from "../random";
import List from "../list";
import RaceDetailes from "../race-detailes";

export default class App extends Component {
  races = [
    'dwarf',
    'elf',
    'halfling',
    'human',
    'dragonborn',
    'gnome',
    'half-elf',
    'half-orc',
    'tiefling'
  ];

  state = {
    current: 'dwarf'
  };

  onClickRace = (evt) => {
    evt.preventDefault();
    this.setState({
      current: evt.target.innerText.toLowerCase()
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
            races={this.races}
            current={this.state.current}
            onClickRace={this.onClickRace} />
          <RaceDetailes
            className="flex-shrink-1"
            current={this.state.current} />
        </div>
      </div >
    );
  };
};