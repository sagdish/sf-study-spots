import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loader from '../UI/Loader/Loader';
import CardView from '../CardView/CardView';
import '../components.css'

async function getPlaces () {
  try {
    const response = await axios.get(
      'https://sf-spots-back-zeit.vercel.app/api/spots/libraries'
      // `http://localhost:5000/api/spots/libraries`
      );
    console.log('server response:', response)
    return response.data;
  }
  catch (err) {
    return console.log(err);
  }
};

// getPlaces();

export default function Home() {
  const [ spotList, setSpotList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  console.log(spotList);
  useEffect(() => {
    getPlaces()
      .then(response => 
        // response.data.map(spots => {
        response.map(spots => {
          //console.log({ name, position, favorite, neighborhood, photos, rating });
          const { name, photos, rating, id } = spots;
          const position = spots.geometry.location;
          const neighborhood = spots.vicinity;
          return { name, position, neighborhood, photos, rating, id }
        })
      )
      .then(spots => {
        setSpotList(spots)
        // set next line to true before pushing for produciton or online
        setLoading(false);
      })
      .catch(err => console.log('error:', err));
  }, []);


  return (
    <>
      {loading ? <Loader /> : (
      <div className="MainContainer">
        {spotList.map(spot =>
          <Fragment key={spot.id}>
            <div className="CardContainer">
              <Link to={{
                pathname: '/spot',
                state: { spot }
              }} style={{ textDecoration: 'none' }}>
                {/* put origin for unsplash in order to know what theme of thumbnails to use */}
                <CardView origin={'library'} spot={spot} />
              </Link>
            </div>
          </Fragment>
        )}
      </div>) }
    </>
  )
};
