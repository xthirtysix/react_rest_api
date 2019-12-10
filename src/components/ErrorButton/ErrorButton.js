import React, { Component } from 'react';

export default class ErrorButton extends Component {
  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button className="btn btn-danger btn-lg m-3"
        onClick={() => this.setState({ renderError: true })}>
        Throw Error
      </button>
    )
  }
};
