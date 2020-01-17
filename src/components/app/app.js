import React, { Component } from "react";
import Header from "../Header";
import Random from "../Random";
import RacePage from "../RacePage";
import ClassPage from "../ClassPage";

import "./App.css";
import OpenDndService from "../../services/dndapi-service";
import { DndProvider } from "../DndServiceContext";

export default class App extends Component {
  dndApi = new OpenDndService();

  render() {
    return (
      <>
        <Header />
        <DndProvider value={this.dndApi}>
          <div className="container container-main d-flex">
            <div className="data-container">
              <RacePage />
              <ClassPage />
            </div>
            <aside className="container random-container">
              <Random />
            </aside>
          </div>
        </DndProvider>
      </>
    );
  }
}
