import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import { RaceList } from "../dndComponents";
import { RaceDetailes } from "../dndComponents";

export default class RacePage extends Component {
  state = {
    currentRace: "Human"
  };

  onChangeRace = evt => {
    this.setState({
      currentRace: evt.target.value
    });
  };

  render() {
    const { currentRace } = this.state;

    return (
      <ErrorBoundry>
        <div className="container">
          <RaceList
            currentValue={currentRace}
            onChangeItem={this.onChangeRace}
          />
          <RaceDetailes currentValue={currentRace} />
        </div>
      </ErrorBoundry>
    );
  }
}
