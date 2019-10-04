import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import '../components.css';
import './Spot.css';
import MapsView from '../Maps/MapsView';

function Spot(props) {
  
  let spot = null;
  if (props.location.state) {
    spot = props.location.state.spot;
  }
  
  console.log(spot);
  
  return (
    spot ? (
    <div className="SpotView">
      {/* <div className="CardContainer"> */}
      <div className="InfoContainer">
        <p style={{fontStyle: "italic", fontSize: '10px'}}>
          soon photo of the spot <br/> will appear here</p>
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
          <h1
            style={{marginTop: 120}}
          >
            Please select place first
          </h1>
        </Fade>
    )
  );
}

export default Spot;