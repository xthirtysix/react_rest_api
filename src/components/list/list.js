import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const {
    data,
    currentValue,
    onChangeItem,
    children: renderLabel,
  } = props;

  const items = data.map(item => {
    const { name } = item;
    const label = renderLabel(item);

    return (
      <option key={name} value={name}>
        {label}
      </option>
    );
  });

  return (
    <select
      className="custom-select mb-1"
      value={currentValue}
      onChange={onChangeItem}
      onBlur={onChangeItem}
    >
      {items}
    </select>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default List;
