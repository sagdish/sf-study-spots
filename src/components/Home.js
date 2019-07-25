import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getPlaces() {
  return axios.get(`http://localhost:5000/api/spots`)
    .then(response => {
      return response;
    })
    .catch();
};

export default function Home() {
  const [ state, setState ] = useState([]);

  useEffect(() => {
    getPlaces()
      .then(response => {
        response.data.map( ({ name, position, favorite, neighborhood, photos, rating }) => {
          console.log({ name, position, favorite, neighborhood, photos, rating });
        })
      })
      .catch();
  });

  return (
    <div>
      <h1>This is home component</h1>
    </div>
  )
  
};
