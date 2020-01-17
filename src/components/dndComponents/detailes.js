import React from "react";
import PropTypes from "prop-types";

import ItemDetailes from "../ItemDetailes";
import {
  withDetailes,
  withDndService,
  withChildFunction,
  compose,
} from "../HocHelpers";

const Record = ({ field, label }) => {
  return (
    <div className="card-text mb-1">
      <h5 className="d-inline">{label}</h5>
      <span>{field}</span>
    </div>
  );
};

Record.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

const renderClassDetailes = ({
  hitDice,
  hp,
  archetypes,
  profST,
  profArmor,
  profWeapons,
  spellcasting,
  description,
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

renderClassDetailes.propTypes = {
  hitDice: PropTypes.string.isRequired,
  hp: PropTypes.string.isRequired,
  archetypes: PropTypes.string,
  profST: PropTypes.string,
  profArmor: PropTypes.string,
  profWeapons: PropTypes.string,
  spellcasting: PropTypes.string,
  description: PropTypes.string,
};

renderClassDetailes.defaultProps = {
  archetypes: "none",
  profST: "none",
  profArmor: "none",
  profWeapons: "none",
  spellcasting: "none",
  description: "none",
};

const mapClassMethodsToProps = dndApi => {
  return {
    getData: dndApi.getClass,
  };
};
const ClassDetailes = compose(
  withDndService(mapClassMethodsToProps),
  withDetailes,
  withChildFunction(renderClassDetailes)
)(ItemDetailes);

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

renderRaceDetailes.propTypes = {
  size: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number.isRequired,
  subraces: PropTypes.string,
  desc: PropTypes.string,
};

renderRaceDetailes.defaultProps = {
  subraces: "none",
  desc: "No description available",
};

const mapRaceMethodsToProps = dndApi => {
  return {
    getData: dndApi.getRace,
  };
};

const RaceDetailes = compose(
  withDndService(mapRaceMethodsToProps),
  withDetailes,
  withChildFunction(renderRaceDetailes)
)(ItemDetailes);

const SpellDetailes = () => {};

export { ClassDetailes, RaceDetailes, SpellDetailes };
