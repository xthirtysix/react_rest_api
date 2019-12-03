import React, { Component } from 'react';
import './race-detailes.css';
import openDndService from '../../services/dndapi-service';

export default class RaceDetailes extends Component {
  dndApi = new openDndService();

  state = {
    name: null,
    size: null,
    speed: null,
    subraces: null,
    desc: null
  }

  constructor() {
    super();
    this.getRace();
  };

  getRace() {
    this.dndApi.getRace('human').then((d) => {
      const subracesArr = d.subraces.map(el => {
        return el.name
      });
      const subracesShown = subracesArr.legth > 0 ? subracesArr.join(', ') : 'none';

      this.dndApi.getAllRaces().then((r) => {
        r.forEach(element => {
          console.log(element.slug);
        }
        )
      });
      this.setState({
        name: d.name,
        size: d.size.split(" ").splice(-1),
        speed: d.speed.walk,
        subraces: subracesShown,
        desc: d.desc + d.age + d.alignment + d.traits + d.vision
      });
    });
  };

  render() {
    return (
      <section className="card card-race flex-grow-1 mb-3">
        <div className="d-flex">
          <div>
            <img
              className="card-img"
              src="img/dwarf.png"
              width="130"
              height="190"
              alt="Description" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{this.state.name}</h3>
            <p className="card-text">Size: {this.state.size}</p>
            <p className="card-text">Speed: {this.state.speed}</p>
            <p className="card-text">Subraces: {this.state.subraces}</p>
          </div>
        </div>
        <p className="card-text card-description">{this.state.desc}</p>
      </section>
    );
  };
};