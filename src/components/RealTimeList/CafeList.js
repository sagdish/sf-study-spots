import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loader from '../UI/Loader/Loader';
import CardView from '../CardView/CardView';
import '../components.css'

async function getPlaces () {
  try {
    const response = await axios.get(`http://localhost:5000/api/spots/coffeelist`);
    console.log('server response:', response.data)
    return response;
  }
  catch (err) {
    return console.log(err);
  }
};

getPlaces();

export default function Home() {
  const [ spotList, setSpotList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  console.log(spotList);
  useEffect(() => {
    getPlaces()
      .then(response => 
        response.data.map(spots => {
          //console.log({ name, position, favorite, neighborhood, photos, rating });
          const { name, photos, rating, id } = spots;
          const position = spots.geometry.location;
          const neighborhood = spots.plus_code.compound_code.split(' ').filter((el, i) => (
            i === 1 || i === 2)).join(' ').slice(0, -1);
          //console.log(neighborhood);
          return { name, position, neighborhood, photos, rating, id }
        })
      )
      .then(spots => {
        setSpotList(spots)
        // set next line to true before pushing for produciton or online
        // setLoading(false);
      })
      .catch(err => console.log('error:', err));
  }, []);

  // for development I use timeOut because locally loading not even showing up
  // delete loader before production
  function loader() {
    setTimeout(() => {
      //console.log('time is up');
      setLoading(false);
    }, 1000)
  }
  loader();

  return (
    <div>
      {loading ? <Loader /> : (
      <div className="MainContainer">
        {spotList.map(spot =>
          <Fragment key={spot.id}>
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
    </div>
  )
};
