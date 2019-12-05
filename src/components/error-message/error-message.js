import React from 'react';

import Icon from './error-icon.png';
import './error-message.css';

const ErrorMessage = () => {
  return (
    <React.Fragment>
      <h3 className="card-header text-center">Critical fail!</h3>
      <div className="error-container">
        <img className="m-4" src={Icon} width="100" height="95" alt="1 rolled on D20"></img>
        <p className="error-text">Try to reroll page with Ctrl+R or <a href="#">write us</a> to cast Repair on our server.</p>
      </div>
    </React.Fragment>
  );
};

export default ErrorMessage;