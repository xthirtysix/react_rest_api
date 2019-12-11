import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="card container p-0">
          <ErrorMessage />
        </div>
      );
    };

    return this.props.children;
  };
};