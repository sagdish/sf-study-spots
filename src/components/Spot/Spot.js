import React from 'react';

import '../components.css';
import './Spot.css';
import MapsView from '../Maps/MapsView';

class Spot extends React.Component {
  // state = {
  //   loaded: false,
  // }

  render() {
    const { spot } = this.props.location.state;
    return (
      // <div className="MainContainer" style={{height: "78vh"}}>
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
    );
  }
}

export default Spot;