import React from 'react';
import { Link } from 'react-router-dom';

import './components.css';

class Coffee extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="CoffeeContainer">
          <Link to="/coffee">
            <h2>who loves coffee?</h2>
          </Link>
        </div>

        <div className="LibraryContainer">
          <Link to="/library">
            <h2>Do you prefer studying in libraries?</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Coffee;