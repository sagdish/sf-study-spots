import React from 'react';

import Unsplash from '../Unsplash/unsplash';
import { inherits } from 'util';

function CardView({spot}) {
  //console.log('CardView', spots);

  return (
    <div>
      <Unsplash />
      <p style={{fontWeight: "bold", fontSize: "18px"}}>{spot.name}</p>
      <p>{spot.neighborhood}</p>
      <p>{spot.rating}</p>
    </div>
  );
}

export default CardView;