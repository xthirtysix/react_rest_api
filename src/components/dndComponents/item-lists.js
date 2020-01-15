import List from "../List";
import { withData, withDndService } from "../HocHelpers";
import withChildFunction from "./withChildFunction";

const renderRaceName = ({ name, subraces }) => {
  return `${name} ${subraces !== "none" ? `(${subraces})` : ""}`;
};

const renderClassName = ({ name }) => {
  return `${name}`;
};

const mapRaceMethodsToProps = (dndApi) => {
  return {
    getData: dndApi.getAllRaces
  };
};

const mapClassMethodsToProps = (dndApi) => {
  return {
    getData: dndApi.getAllClasses
  };
};

const RaceList = withDndService(
                  withData(
                    withChildFunction(List, renderRaceName)
                  ), mapRaceMethodsToProps);
const ClassList = withDndService(
                    withData(
                      withChildFunction(List, renderClassName)
                    ), mapClassMethodsToProps);

export { RaceList, ClassList};
