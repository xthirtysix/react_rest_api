import React, { Component } from 'react';
import openDndService from '../../services/dndapi-service';

export default class Random extends Component {
  dndApi = new openDndService();

  state = {
    spell: {
      name: null,
      level: null,
      school: null,
      classes: null,
      range: null,
      castingTime: null,
      duration: null,
      components: null,
      description: null
    }
  }

  spells = [
    "acid-arrow",
    "acid-splash",
    "aid",
    "alarm",
    "alter-self",
    "animal-friendship",
    "animal-messenger",
    "animal-shapes",
    "animate-dead",
    "animate-objects",
    "antilife-shell",
    "antimagic-field",
    "antipathysympathy",
    "arcane-eye",
    "arcane-hand",
    "arcane-lock",
    "arcane-sword",
    "arcanists-magic-aura",
    "astral-projection",
    "augury",
    "awaken",
    "bane",
    "banishment",
    "barkskin",
    "beacon-of-hope",
    "bestow-curse",
    "black-tentacles",
    "blade-barrier",
    "bless",
    "blight",
    "blindnessdeafness",
    "blink",
    "blur",
    "branding-smite",
    "burning-hands",
    "call-lightning",
    "calm-emotions",
    "chain-lightning",
    "charm-person",
    "chill-touch",
    "circle-of-death",
    "clairvoyance",
    "clone",
    "cloudkill",
    "color-spray",
    "command",
    "commune",
    "commune-with-nature",
    "comprehend-languages",
    "compulsion",
  ];

  constructor() {
    super();
    this.updateRandom();
  };

  updateRandom() {
    this.dndApi.getSpell(this.spells[Math.floor(Math.random() * this.spells.length)]).then((s) => {
      this.setState({
        name: s.name,
        level: s.level,
        school: s.school,
        classes: s.dnd_class,
        range: s.range,
        castingTime: s.casting_time,
        duration: s.duration,
        components: s.components,
        description: s.desc
      });
    });
  };

  render() {
    return (
      <section className="card mb-3">
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <h3 className="card-title">{this.state.name}</h3>
            <p className="card-text">{this.state.level} {this.state.school} ({this.state.classes})</p>
            <p className="card-text">Range: {this.state.range}</p>
            <p className="card-text">Casting time: {this.state.castingTime}</p>
            <p className="card-text">Duration: {this.state.duration}</p>
            <p className="card-text">Components: {this.state.components}</p>
          </div>
          <div>
            <img
              className="card-img p-3"
              src={`/img/${this.state.school}.png`}
              width="130"
              height="190"
              alt="spell school logo" />
          </div>
        </div>
        <p className="card-text p-4">{this.state.description}</p>
      </section >
    );
  };
};