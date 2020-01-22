import React from "react";
import PropTypes from "prop-types";

const Row = ({ left, right }) => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default Row;
