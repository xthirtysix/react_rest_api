// import React from 'react';
// import {withDetailes} from '../HocHelpers';
// import withChildFunction from './withChildFunction';
// import ItemDetailes, {Record} from '../ItemDetailes';
// import {withDndService} from '../HocHelpers'

// const renderRaceDetailes = ({ size, speed, subraces, desc }) => {
//   return (
//     <div>
//       <Record field={size} label="Size: " />
//       <Record field={speed} label="Speed: " />
//       <Record field={subraces} label="Subraces: " />
//       <Record field={desc} label="Description: " />
//     </div>
//   );
// };

// const RaceDetailes = ({OpenDndService}) => {
//   const {getRace} = OpenDndService;
//   return (
//     withDetailes(withChildFunction(ItemDetailes, renderRaceDetailes),
//     getRace)
//   );
// };

// export default withDndService(RaceDetailes);
