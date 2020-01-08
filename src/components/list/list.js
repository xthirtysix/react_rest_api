import React from "react";

const List = props => {
  const { data, currentValue, onChangeItem, children: renderLabel } = props;
  console.log(props);

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
    >
      {items}
    </select>
  );
};

export default List;
