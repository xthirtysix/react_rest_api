import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import openDndService from "../../services/dndapi-service";
import { ClassList } from "../dndComponents";
import { ClassDetailes } from "../dndComponents";

export default class ClassPage extends Component {
  dndApi = new openDndService();

  state = {
    currentClass: "Wizard"
  };

  onChangeClass = evt => {
    this.setState({
      currentClass: evt.target.value
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
