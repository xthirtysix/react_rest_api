import List from "../List";
import {
  withData,
  withDndService,
  withChildFunction,
  compose,
} from "../HocHelpers";

const renderRaceName = ({ name, subraces }) => {
  return `${name} ${subraces !== "none" ? `(${subraces})` : ""}`;
};

const renderClassName = ({ name }) => {
  return `${name}`;
};

const mapRaceMethodsToProps = dndApi => {
  return {
    getData: dndApi.getAllRaces,
  };
};

const mapClassMethodsToProps = dndApi => {
  return {
    getData: dndApi.getAllClasses,
  };
};

const RaceList = compose(
  withDndService(mapRaceMethodsToProps),
  withData,
  withChildFunction(renderRaceName)
)(List);

const ClassList = compose(
  withDndService(mapClassMethodsToProps),
  withData,
  withChildFunction(renderClassName)
)(List);

export { RaceList, ClassList };
