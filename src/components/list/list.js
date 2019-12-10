import React, { Component } from 'react';
import openDndService from '../../services/dndapi-service';
import Spinner from '../spinner';

export default class List extends Component {
  dndApi = new openDndService();

  componentDidMount() {
    this.dndApi
      .getAllRaces()
      .then((races) => {
        this.props.getRaces(races);
      });
  };

  renderItems(array) {
    return array.map((item) => {
      return (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      );
    });
  };

  render() {
    const { races, onChangeRace } = this.props;
    const { currentRace } = this.props;

    const items = this.renderItems(races);

    if (!races) {
      return <Spinner />
    };

    return (
      <select className="custom-select mb-1" value={currentRace} onChange={onChangeRace} >
        {items}
      </select>
    );
  };
};
