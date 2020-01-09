import React from "react";

import ItemDetailes from "../ItemDetailes";
import { withDetailes } from "../HocHelpers";
import withChildFunction from "./withChildFunction";
import openDndService from "../../services/dndapi-service";

const Record = ({ field, label }) => {
  return (
    <div className="card-text mb-1">
      <h5 className="d-inline">{label}</h5>
      <span>{field}</span>
    </div>
  );
};

const dndApi = new openDndService();

const { getClass, getRace } = dndApi;

const renderClassDetailes = ({
  hitDice,
  hp,
  archetypes,
  profST,
  profArmor,
  profWeapons,
  spellcasting,
  description
}) => {
  return (
    <div>
      <Record field={hitDice} label="Hit Dice: " />
      <Record field={hp} label="Hit Points: " />
      <Record field={archetypes} label="Archetypes: " />
      <Record field={profST} label="Saving Throws: " />
      <Record field={profArmor} label="Armor: " />
      <Record field={profWeapons} label="Weapons: " />
      <Record field={spellcasting} label="Spellcasting ability: " />
      <Record field={description} label="Description: " />
    </div>
  );
};

const ClassDetailes = withDetailes(
  withChildFunction(ItemDetailes, renderClassDetailes),
  getClass
);

const renderRaceDetailes = ({ size, speed, subraces, desc }) => {
  return (
    <div>
      <Record field={size} label="Size: " />
      <Record field={speed} label="Speed: " />
      <Record field={subraces} label="Subraces: " />
      <Record field={desc} label="Description: " />
    </div>
  );
};

const RaceDetailes = withDetailes(
  withChildFunction(ItemDetailes, renderRaceDetailes),
  getRace
);

const SpellDetailes = () => {};

export { ClassDetailes, RaceDetailes, SpellDetailes };
