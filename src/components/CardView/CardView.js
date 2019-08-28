import React from 'react';

import Unsplash from '../Unsplash/unsplash';
import { inherits } from 'util';

function CardView(props) {
  //console.log('CardView', spots);

  return (
    <div>
      <Unsplash origin={props.origin} />
      <p style={{fontWeight: "bold", fontSize: "18px"}}>{props.spot.name}</p>
      <p>{props.spot.neighborhood}</p>
      <p>{props.spot.rating}</p>
    </div>
  );
}

export default CardView;