import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import { ClassList, ClassDetailes } from "../dndComponents";

export default class ClassPage extends Component {
  constructor() {
    super();
    this.state = {
      currentClass: "Wizard",
    };
  }

  onChangeClass = evt => {
    this.setState({
      currentClass: evt.target.value,
    });
  };

  render() {
    const { currentClass } = this.state;

    return (
      <ErrorBoundry>
        <div className="container">
          <ClassList
            currentValue={currentClass}
            onChangeItem={this.onChangeClass}
          />
          <ClassDetailes currentValue={currentClass} />
        </div>
      </ErrorBoundry>
    );
  }
}
