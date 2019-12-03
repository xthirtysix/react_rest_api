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
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Random />
        <div className="d-flex flex-wrap justify-content-between">
          <List races={this.races} current={this.state.current} />
          <RaceDetailes />
        </div>
      </div>
    );
  };
};