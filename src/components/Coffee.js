import React from 'react';

// import gif from './images/30.gif';
import './components.css';
//import Cumaica from './coffeeShops/cumaica';
import MapsView from './coffeeShops/MapsView';

class Coffee extends React.Component {
  // state = {
  //   loaded: false,
  // }

  render() {
    const { spot } = this.props.location.state;
    return (
      <div className="MainContainer">
        <div className="CoffeeContainer">
          <h2>{spot.name}</h2>
          <h3>{spot.neighborhood}</h3>
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

export default Coffee;