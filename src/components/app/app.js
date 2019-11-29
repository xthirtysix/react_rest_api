import React, { Component } from 'react';
import Header from "../header";
import Random from "../random";
import List from "../list";
import RaceDetailes from "../race-detailes";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Random />
        <div className="d-flex">
          <List />
          <RaceDetailes />
        </div>
      </div>
    );
  };
};