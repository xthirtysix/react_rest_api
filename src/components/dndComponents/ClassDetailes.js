// import React from "react";
// import { withDetailes, withDndService } from "../HocHelpers";
// import withChildFunction from "./withChildFunction";
// import ItemDetailes, {Record} from "../ItemDetailes";
// import {withDndService} from '../HocHelpers';

// const renderClassDetailes = ({
//   hitDice,
//   hp,
//   archetypes,
//   profST,
//   profArmor,
//   profWeapons,
//   spellcasting,
//   description
// }) => {
//   return (
//     <div>
//       <Record field={hitDice} label="Hit Dice: " />
//       <Record field={hp} label="Hit Points: " />
//       <Record field={archetypes} label="Archetypes: " />
//       <Record field={profST} label="Saving Throws: " />
//       <Record field={profArmor} label="Armor: " />
//       <Record field={profWeapons} label="Weapons: " />
//       <Record field={spellcasting} label="Spellcasting ability: " />
//       <Record field={description} label="Description: " />
//     </div>
//   );
// };

// const ClassDetailes = () => {
//   return (
//     withDndService(withDetailes(withChildFunction(ItemDetailes, renderClassDetailes)))
//   );
// };

// export default ClassDetailes;
