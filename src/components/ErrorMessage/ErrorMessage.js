import React from "react";

import Icon from "./error-icon.png";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <>
      <h3 className="card-header text-center">Critical fail!</h3>
      <div className="error-container">
        <img
          className="m-4"
          src={Icon}
          width="100"
          height="95"
          alt="1 rolled on D20"
        />
        <p className="error-text">
          Try to reroll page with Ctrl+R or{" "}
          <a href="index.html">write our Priest</a> to cast Mending on
          our server.
        </p>
      </div>
    </>
  );
};

export default ErrorMessage;
