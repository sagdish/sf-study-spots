import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loader from '../UI/Loader/Loader';
import CardView from '../CardView/CardView';
import '../components.css'

async function sendLocAndGetRes(position) {
  try {
    if (!position) {
      alert("cannot obtain location, check browser permissions")
      return;
    }
    const response = await axios.get(
      // 'http://localhost:5000/api/spots/current'
      'https://sf-spots-back-zeit.vercel.app/api/spots/current'
      , {
      params: {
        lat: position.lat,
        lng: position.lng
      }
    });
    console.log('from sendLocAndGetRes function: ', response.data)
    return response.data;
  }
  catch(err) {
    console.log("error sending location to the server", err)
  }
};

export default function LocationGetter() {
  const [ position, setPosition ] = useState(null);
  const [ spotList, setSpotList ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    function getter() {
      if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(pos => {
            const coords = pos.coords;
            console.log('your current location: ', coords);
            setPosition({ lat: coords.latitude, lng: coords.longitude });
        }, err => console.error(err)) // add timeout here: {timeout: 5000}
      } else {
        alert("please enable your locaiton");
      }
    }
    getter();
  }, [])

  useEffect(() => {
    if (position !== null && position.lat !== null) {
      console.log('reached inside if');
      sendLocAndGetRes(position)
        .then(response =>
          response.map(spots => {
          const { name, photos, rating, place_id } = spots;
          const position = spots.geometry.location;
          const neighborhood = spots.vicinity;
          return { name, position, neighborhood, photos, rating, place_id }
        })
      )
      .then(spots => {
        setSpotList(spots)
        setLoading(false);
        console.log('state of spot final: ', spots);
      })
      .catch(err => console.log('error:', err));
    }
  }, [position]);

  console.group();
    console.log(position);
    console.log(spotList);
  console.groupEnd();

  return (
    <>
      {loading ? <Loader /> : (
      <div className="MainContainer">
        {spotList.map(spot =>
          <Fragment key={spot.place_id}>
            <div className="CardContainer">
              <Link to={{
                pathname: '/spot',
                state: { spot }
              }} style={{ textDecoration: 'none' }}>
                <CardView spot={spot} />
              </Link>
            </div>
          </Fragment>
        )}
      </div>) }
    </>
  )
}