import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import fs from 'fs';

import '../components.css';
import './Spot.css';
import MapsView from '../Maps/MapsView';
import loading from '../images/Spin.svg';

async function getPhoto(photoreference) {

  const url = await axios.get('https://sf-spots-back-zeit.vercel.app/api/spots/photo', {
    params: {
      photoreference
    }
  });

  console.log('image', url);
  return url.data;
}

function Spot(props) {
  const [spot, setSpot] = useState(null)
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
    if (props.location.state) {
      // spot1 = props.location.state.spot;
      setSpot(props.location.state.spot)
    }
    console.log('spot!!!', spot)
    if (spot && spot.photos && spot.photos.length) {
      console.log('photos array', spot.photos);
      getPhoto(spot.photos[0].photo_reference)
        .then(res => {
          setPhoto(res);
        })
        .catch();
    }

  }, [props.location.state, props.location.state.spot, spot]);
  
  console.log('photo', photo);
  
  return (
    spot ? (
    <div className="SpotView">
      {/* <div className="CardContainer"> */}
      <div className="InfoContainer">
        <div className="image-container">
          {spot.photos ? photo ? 
            <img className="image" alt='' src={photo}/> :
            <img className="" alt='' src={loading}/>
          : 
          <p style={{fontStyle: "italic", fontSize: '14px'}}>
            No picture provided by users <br/> <span style={{fontStyle: 'normal', fontSize: '30px'}}>😞</span>
          </p>
          }
          </div>
        <h2>{spot.name}</h2>
        <p>{spot.neighborhood}</p>
        <p>{spot.type}</p>
        <p>{spot.rating}</p>
      </div>
      <div className="MapsContainer">
        <MapsView spot={spot} />
      </div>
    </div>
    ) : (
        <Fade right>
          <h1 style={{marginTop: 120}}>
            Please select place first
          </h1>
        </Fade>
    )
  );
}

export default Spot;