import React, { Component } from "react";

export default class ErrorButton extends Component {
  constructor() {
    super();
    this.state = {
      renderError: false,
    };
  }

  render() {
    const { renderError } = this.state;

    if (renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        type="button"
        className="btn btn-danger btn-lg m-3"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
