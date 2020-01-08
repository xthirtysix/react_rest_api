import React from "react";
import ErrorButton from "../ErrorButton";
import "./ItemDetailes.css";

const Record = ({ item, field, label }) => {
  return (
    <div className="card-text mb-1">
      <h5 className="d-inline">{label}</h5>
      <span>{item[field]}</span>
    </div>
  );
};

export { Record };

const ItemDetailes = props => {
  const { currentValue, item } = props;

  return (
    <section className="card card-race flex-grow-1 mb-3">
      <div className="d-flex flex-wrap p-2">
        <div className="card-body">
          <img
            className="card-img float-right"
            src={`img/${currentValue}.png`}
            width="130"
            height="190"
            alt={`${currentValue} view`}
          />
          <h3 className="card-title">{currentValue}</h3>
          <div>
            {React.Children.map(props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </div>
        </div>
      </div>
      <ErrorButton />
    </section>
  );
};

export default ItemDetailes;
