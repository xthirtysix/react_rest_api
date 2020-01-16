import React, { Component } from "react";
import Header from "../Header";
// import Random from '../Random';
// import ErrorButton from '../ErrorButton';
import ErrorMessage from "../ErrorMessage";
import RacePage from "../RacePage";
import ClassPage from "../ClassPage";

import "./App.css";
import OpenDndService from "../../services/dndapi-service";
import { DndProvider } from "../dndServiceContext";
// import ErrorBoundry from '../ErrorBoundry';

export default class App extends Component {
  dndApi = new OpenDndService();

  constructor() {
    super();
    this.state = {
      // spells: [],
      // randomSpell: {},
      // randomSpellError: false,
      // currentItem: "",
      hasError: false,
    };
  }

  // getSpells = spells => {
  //   this.setState({spells});
  // };

  // onClassChange = evt => {
  //   this.setState({
  //     clazz: evt.target.value,
  //   });
  // };

  // getRandomSpell = () => {
  //   const {spells} = this.state;

  //   const id = Math.floor(Math.random() * spells.length);
  //   this.setState({
  //     randomSpell: spells[id],
  //     randomSpellLoading: false
  //   });
  // };

  // onRandomSpellError = () => {
  //   this.setState({
  //     randomSpellLoading: false,
  //     randomSpellError: true
  //   });
  // };

  render() {
    // const { spells, randomSpell, randomSpellLoading,
    // randomSpellError, hasError } = this.state;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="container">
          <section className="card mt-5">
            <ErrorMessage />
          </section>
        </div>
      );
    }

    return (
      <>
        <Header />
        {/* <ErrorBoundry>

          <div className="container">
            <List
              getData={this.dndApi.getAllClasses}
              onChangeItem={this.onClassChange}
              currentValue={this.state.clazz}>
              {({ name, archetypes }) => {
                const optional = archetypes ? `(${archetypes})` : '';
                return `${name} ${optional}`;
              }}
            </List>
          </div>

          <div className="container container-main d-flex">

            <div className="race-container"> */}
        <DndProvider value={this.dndApi}>
          <RacePage />
          <ClassPage />
        </DndProvider>
        {/* <ErrorButton />
            </div>

            <aside className="random-container">
              <Random
                spells={spells}
                getSpells={this.getSpells}
                randomSpell={randomSpell}
                loading={randomSpellLoading}
                error={randomSpellError}
                onError={this.onRandomSpellError}
                getRandomSpell={this.getRandomSpell} />
            </aside>

          </div>

        </ErrorBoundry> */}
      </>
    );
  }
}
