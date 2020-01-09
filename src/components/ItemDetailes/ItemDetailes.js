import React from "react";
import ErrorButton from "../ErrorButton";
import "./ItemDetailes.css";

const ItemDetailes = props => {
  const {
    item,
    item: { name },
    children: renderDetailes
  } = props;
  console.log(props);

  const detailes = renderDetailes(item);

  return (
    <section className="card card-race flex-grow-1 mb-3">
      <div className="d-flex flex-wrap p-2">
        <div className="card-body">
          <img
            className="card-img float-right"
            src={`img/${name}.png`}
            width="130"
            height="190"
            alt={`${name} view`}
          />
          <h3 className="card-title">{name}</h3>
          <div>{detailes}</div>
        </div>
      </div>
      <ErrorButton />
    </section>
  );
};

export default ItemDetailes;
