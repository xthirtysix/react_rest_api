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
    const { currentRace } = this.props;

    return array.map((item) => {
      const isActive = item.name === currentRace;
      const cssClass = isActive ? 'active' : '';

      return (
        <li key={item.name}>
          <a className={`nav-link ${cssClass}`}
            href="#">{item.name}</a>
        </li>
      );
    });
  };

  render() {
    const { racesList, onClickRace } = this.props;

    const items = this.renderItems(racesList);

    if (!racesList) {
      return <Spinner />
    };

    return (
      <ul
        className="nav nav-pills flex-column mr-4"
        onClick={onClickRace}>
        {items}
      </ul>
    );
  };
};
