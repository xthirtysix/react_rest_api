import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-blocks">
        <div className="spinner-wrapper">
          <div
            style={{
              left: "19px",
              top: "19px",
              animationDelay: "0s",
            }}
          />
          <div
            style={{
              left: "40px",
              top: "19px",
              animationDelay: "0.125s",
            }}
          />
          <div
            style={{
              left: "61px",
              top: "19px",
              animationDelay: "0.25s",
            }}
          />
          <div
            style={{
              left: "19px",
              top: "40px",
              animationDelay: "0.875s",
            }}
          />
          <div
            style={{
              left: "61px",
              top: "40px",
              animationDelay: "0.375s",
            }}
          />
          <div
            style={{
              left: "19px",
              top: "61px",
              animationDelay: "0.75s",
            }}
          />
          <div
            style={{
              left: "40px",
              top: "61px",
              animationDelay: "0.625s",
            }}
          />
          <div
            style={{
              left: "61px",
              top: "61px",
              animationDelay: "0.5s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
