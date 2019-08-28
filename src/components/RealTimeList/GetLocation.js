import React, { useState, useEffect } from 'react';
import MapsView from '../Maps/MapsView';

async function getter() {
  try {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        
        const position = {
          lat: coords.latitude,
          lng: coords.longitude
        }
        return position;
      });
    }
  }
  catch(err) {
    console.log(err)
  }
}

export default function LocationGetter() {
  const [ position, setPosition ] = useState(null);

    useEffect(() => {
      getter()
        .then(location => {
          setPosition(location)
        })
        .catch(err => console.log(err));
    }, [])

    
 return (
   <MapsView spot={position} />
 );
}