import React from "react";

import ItemDetailes from "../ItemDetailes";
import { withDetailes, withDndService } from "../HocHelpers";
import withChildFunction from "./withChildFunction";

const Record = ({ field, label }) => {
  return (
    <div className="card-text mb-1">
      <h5 className="d-inline">{label}</h5>
      <span>{field}</span>
    </div>
  );
};

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

const mapClassMethodsToProps = (dndApi) => {
  return {
    getData: dndApi.getClass
  }
}
const ClassDetailes = withDndService(withDetailes(
  withChildFunction(ItemDetailes, renderClassDetailes)), mapClassMethodsToProps
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

const mapRaceMethodsToProps = (dndApi) => {
  return {
    getData: dndApi.getRace
  }
}

const RaceDetailes = withDndService(withDetailes(
  withChildFunction(ItemDetailes, renderRaceDetailes)), mapRaceMethodsToProps
);

const SpellDetailes = () => {};

export { ClassDetailes, RaceDetailes, SpellDetailes };
