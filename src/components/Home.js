import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getPlaces() {
  return axios.get(`http://localhost:5000/api/spots`)
    .then(response => {
      console.log('server response:', response)
      return response;
    })
    .catch(err => console.log(err));
};

export default function Home() {
  const [ spotList, setSpotList ] = useState([]);
  //console.log(spotList);
  useEffect(() => {
    getPlaces()
      .then(response => 
        response.data.map(spots => {
          //console.log({ name, position, favorite, neighborhood, photos, rating });
          const { name, position, favorite, neighborhood, photos, rating, _id } = spots;
          return { name, position, favorite, neighborhood, photos, rating, _id }
        })
      )
      .then(spots => setSpotList(spots))
      .catch()
  }, []);

  return (
    <div>
      <h1>This is home component</h1>
      {spotList.map(spots =>
      <div key={spots._id}>{spots.name} {spots.position.lat} {spots.rating} </div>
      )}
    </div>
  )
  
};
