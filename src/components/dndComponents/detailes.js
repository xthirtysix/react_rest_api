import React from "react";

import ItemDetailes from "../ItemDetailes";
import { withDetailes } from "../HocHelpers";
import openDndService from "../../services/dndapi-service";

const dndApi = new openDndService();

const { getClass, getRace } = dndApi;

// const renderClassFields = props => {
//   return (
//     <ItemDetailes getData={getClass} currentValue={props.currentValue}>
//       <Record field="hitDice" label="Hit Dice: " />
//       <Record field="hp" label="Hit Points: " />
//       <Record field="archetypes" label="Archetypes: " />
//       <Record field="profST" label="Saving Throws: " />
//       <Record field="profArmor" label="Armor: " />
//       <Record field="profWeapons" label="Weapons: " />
//       <Record field="spellcasting" label="Spellcasting ability: " />
//       <Record field="description" label="Description: " />
//     </ItemDetailes>
//   );
// };

const ClassDetailes = withDetailes(
  ItemDetailes,
  ({ item }) => <span>{item}</span>,
  getClass
);

// const RaceDetailes = props => {
//   return (
//     <ItemDetailes getData={getRace} currentValue={props.currentValue}>
//       <Record field="size" label="Size: " />
//       <Record field="speed" label="Speed: " />
//       <Record field="subraces" label="Subraces: " />
//       <Record field="desc" label="Description: " />
//     </ItemDetailes>
//   );
// };

const RaceDetailes = withDetailes(
  ItemDetailes,
  item => <p>{item.name}</p>,
  getRace
);

const SpellDetailes = () => {};

export { ClassDetailes, RaceDetailes, SpellDetailes };
