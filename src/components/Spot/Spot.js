import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import fs from 'fs';

import '../components.css';
import './Spot.css';
import MapsView from '../Maps/MapsView';
import loading from '../images/Spin.svg';

async function getPhoto(photoreference) {

  const url = await axios.get('http://localhost:5000/api/spots/photo', {
    params: {
      photoreference
    }
  });

  console.log('image', url);
  return url.data;
}

function Spot(props) {

  //1 set state instead of var
  //2 call to places api to get photo const photo = 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBteViGo-N3uCUN2NWHlAnPg1ow8hOoplk&photoreference=CmRaAAAAatRnbGQcNn2Lu23dL30yedDqUaFslwk0vHeUkB5Uuypn-MsrBFIiyTWYRZpS6eSPXwJ1OaXquTIZ4Wc6_WDiRRw8YUKnxKHt30374R8QLGbrIJUhetIDHOOWncnPyeo3EhDXQpkhWC9y3NNERenNFTMsGhSzAcuWrTo-sqAy7VdD4VSZfsg8Rw&maxheight=500'
  // 3 display photo
  const [spot, setSpot] = useState(null)
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
    if (props.location.state) {
      // spot1 = props.location.state.spot;
      setSpot(props.location.state.spot)
    }
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
          {photo ? 
            <img className="image" alt='' src={photo}/> :
            <img className="" alt='' src={loading}/> 
          }</div>
        {/* <p style={{fontStyle: "italic", fontSize: '10px'}}>
          soon photo of the spot <br/> will appear here</p> */}
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