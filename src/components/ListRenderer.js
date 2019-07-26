import React from 'react';

import Unsplash from '../development/unsplash';

function ListRenderer({spot}) {
  //console.log('listRenderer', spots);

  return (
    <div>
        <Unsplash />
        <h2>{spot.name}</h2>
        <h4>{spot.neighborhood}</h4>
        <h4>{spot.rating}</h4>
    </div>
  );
}

export default ListRenderer;