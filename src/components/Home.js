import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CardView from './CardView/CardView';
import './components.css'

async function getPlaces () {
  try {
    const response = await axios.get(`http://localhost:5000/api/spots`);
    //console.log('server response:', response)
    return response;
  }
  catch (err) {
    return console.log(err);
  }
};

export default function Home() {
  const [ spotList, setSpotList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
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
      {loading ? ( <div className='loading-container'>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> ) : (
      <div className="MainContainer">
        {spotList.map(spot =>
          <Fragment key={spot._id}>
            <div className="CoffeeContainer">
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
