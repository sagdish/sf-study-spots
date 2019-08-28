import React from 'react';

import '../components.css';
import MapsView from '../Maps/MapsView';

class Spot extends React.Component {
  // state = {
  //   loaded: false,
  // }

  render() {
    const { spot } = this.props.location.state;
    return (
      <div className="MainContainer" style={{height: "78vh"}}>
        <div className="CardContainer">
          <h4>{spot.name}</h4>
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