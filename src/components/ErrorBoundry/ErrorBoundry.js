import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorMessage from "../ErrorMessage";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="card container p-0">
          <ErrorMessage />
        </div>
      );
    }

    return children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
