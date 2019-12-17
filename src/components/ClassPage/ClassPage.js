import React, { Component } from 'react';
import List from '../List';
import ItemDetailes, { Record } from '../ItemDetailes/ItemDetailes';
import ErrorBoundry from '../ErrorBoundry';
import openDndService from '../../services/dndapi-service';

export default class ClassPage extends Component {
  dndApi = new openDndService();

  state = {
    currentClass: 'Wizard'
  };

  onChangeClass = (evt) => {
    this.setState({
      currentClass: evt.target.value
    });
  };

  render() {
    const { currentClass } = this.state;
    const { getAllClasses, getClass } = this.dndApi;

    return (
      <ErrorBoundry>
        <div className="container">
          <List
            getData={getAllClasses}
            currentValue={currentClass}
            onChangeItem={this.onChangeClass} >
            {({ name }) => {
              return `${name}`;
            }}
          </List>
          <ItemDetailes
            getData={getClass}
            currentValue={currentClass}>
            <Record field="hitDice" label="Hit Dice: " />
            <Record field="hp" label="Hit Points: " />
            <Record field="archetypes" label="Archetypes: " />
            <Record field="profST" label="Saving Throws: " />
            <Record field="profArmor" label="Armor: " />
            <Record field="profWeapons" label="Weapons: " />
            <Record field="spellcasting" label="Spellcasting ability: " />
            <Record field="description" label="Description: " />
          </ItemDetailes>
        </div>
      </ErrorBoundry>
    );
  };
};