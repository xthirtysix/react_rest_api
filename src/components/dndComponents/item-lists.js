import React from "react";
import List from "../List";
import { withData } from "../HocHelpers";
import withChildFunction from "./withChildFunction";
import openDndService from "../../services/dndapi-service";

const dndApi = new openDndService();

const { getAllRaces, getAllClasses, getAllSpells } = dndApi;

const renderRaceName = ({ name, subraces }) => {
  return `${name} ${subraces !== "none" ? `(${subraces})` : ""}`;
};

const renderClassName = ({ name }) => {
  return `${name}`;
};

const RaceList = withData(withChildFunction(List, renderRaceName), getAllRaces);
const ClassList = withData(
  withChildFunction(List, renderClassName),
  getAllClasses
);
const SpellList = withData(List, getAllSpells);

export { RaceList, ClassList, SpellList };
