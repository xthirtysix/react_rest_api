import React, { Component } from "react";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";
import { ClassList, ClassDetailes } from "../DndComponents";

export default class ClassPage extends Component {
  constructor() {
    super();
    this.state = {
      currentClass: "Wizard",
    };
  }

  onClickClass = evt => {
    evt.preventDefault();
    this.setState({
      currentClass: evt.target.value,
    });
  };

  render() {
    const { currentClass } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={
            <ClassList
              currentValue={currentClass}
              onClick={this.onClickClass}
            />
          }
          right={<ClassDetailes currentValue={currentClass} />}
        />
      </ErrorBoundry>
    );
  }
}
