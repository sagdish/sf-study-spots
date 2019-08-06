import React from 'react';

import Unsplash from '../development/unsplash';

function ListRenderer({spot}) {
  //console.log('listRenderer', spots);

  return (
    <div>
        <Unsplash />
        <h3>{spot.name}</h3>
        <p>{spot.neighborhood}</p>
        <p>{spot.rating}</p>
    </div>
  );
}

export default ListRenderer;