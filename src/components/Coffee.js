import React from 'react';

import './components.css';
import Cumaica from './coffeeShops/cumaica';

class Coffee extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="CoffeeContainer">
          <h2>this is a coffeeshop component</h2>
        </div>
        <div className="MapsContainer">
          <Cumaica />
        </div>
      </div>
    );
  }
}

export default Coffee;