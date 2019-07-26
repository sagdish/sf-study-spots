import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Unsplash from '../development/unsplash';
import ListRenderer from './ListRenderer';
import './components.css'

function getPlaces() {
  return axios.get(`http://localhost:5000/api/spots`)
    .then(response => {
      //console.log('server response:', response)
      return response;
    })
    .catch(err => console.log(err));
};

export default function Home() {
  const [ spotList, setSpotList ] = useState([]);
  console.log(spotList);

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
    <div className="MainContainer">
      {spotList.map(spots =>
        <Fragment key={spots._id}>
          <div className="CoffeeContainer">
            <Link to={{
              pathname: '/coffee',
              state: spots,
            }}>
              <Unsplash />
              <ListRenderer spots={spots} />
            </Link>
          </div>
        </Fragment>
      )}
    </div>
  )
  
};
