import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const {
    data,
    currentValue,
    onClick,
    children: renderLabel,
  } = props;

  const items = data.map(item => {
    const { name } = item;
    const label = renderLabel(item);

    return (
      <button
        key={name}
        className={`list-group-item ${
          currentValue === name ? "active" : ""
        }`}
        type="button"
        onClick={onClick}
        value={name}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="list-group mb-1" value={currentValue}>
      {items}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default List;
