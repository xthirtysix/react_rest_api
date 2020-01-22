import React, { Component } from "react";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";
import { RaceList, RaceDetailes } from "../DndComponents";

export default class RacePage extends Component {
  constructor() {
    super();
    this.state = {
      currentRace: "Human",
    };
  }

  onClickRace = evt => {
    evt.preventDefault();
    this.setState({
      currentRace: evt.target.value,
    });
  };

  render() {
    const { currentRace } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={
            <RaceList
              currentValue={currentRace}
              onClick={this.onClickRace}
            />
          }
          right={<RaceDetailes currentValue={currentRace} />}
        />
      </ErrorBoundry>
    );
  }
}
