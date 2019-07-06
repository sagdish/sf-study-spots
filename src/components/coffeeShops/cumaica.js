import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import '../components.css';

const mapStyles = {
  width: '35%',
  height: '300px'
};

class Cumaica extends React.Component {

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: 37.783138,
            lng: -122.461632
          }}
        />
        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmekl7erk7QVTK2Rqbw0EG_7SZ3KdlH7Q'
})(Cumaica);

//module.export = Cumaica