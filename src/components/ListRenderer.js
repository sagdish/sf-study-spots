import React from 'react';

import Unsplash from '../development/unsplash';

function ListRenderer({spots}) {
  //console.log('listRenderer', spots);

  return (
    <div>
        <h2>{spots.name}</h2>
        <h4>{spots.neighborhood}</h4>
        <h4>{spots.rating}</h4>
    </div>
  );
}

export default ListRenderer;