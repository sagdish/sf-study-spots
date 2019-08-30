import React from 'react';
import Locator from '../RealTimeList/GetLocation';

// import './components.css';

class Test extends React.Component {
  render() {
    return (

      <div className="MainContainer">
        <div className="LibraryContainer">
          <h2>This is test component</h2>
          <Locator />
        </div>
      </div>
    );
  }
}

export default Test;