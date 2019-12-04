import React, { Component } from 'react';
import openDndService from '../../services/dndapi-service';

export default class Random extends Component {
  dndApi = new openDndService();

  state = {
    spell: {}
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

  onSpellUpdate = (spell) => {
    this.setState({ spell })
  }

  updateRandom() {
    const randomSpellName = this.spells[Math.floor(Math.random() * this.spells.length)];

    this.dndApi.getSpell(randomSpellName).then(this.onSpellUpdate);
  };

  render() {
    const { spell: { name, level, school, classes, range, castingTime, duration, components, description } } = this.state;
    return (
      <section className="card mb-3">
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{level} {school} ({classes})</p>
            <p className="card-text">Range: {range}</p>
            <p className="card-text">Casting time: {castingTime}</p>
            <p className="card-text">Duration: {duration}</p>
            <p className="card-text">Components: {components}</p>
          </div>
          <div>
            <img
              className="card-img p-3"
              src={`/img/${school}.png`}
              width="130"
              height="190"
              alt="spell school logo" />
          </div>
        </div>
        <p className="card-text p-4">{description}</p>
      </section >
    );
  };
};