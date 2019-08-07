import React from 'react';

import Unsplash from '../Unsplash/unsplash';

function CardView({spot}) {
  //console.log('CardView', spots);

  return (
    <div>
        <Unsplash />
        <h3>{spot.name}</h3>
        <p>{spot.neighborhood}</p>
        <p>{spot.rating}</p>
    </div>
  );
}

export default CardView;