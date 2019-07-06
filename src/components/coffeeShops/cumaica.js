import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import '../components.css';

// const mapStyles = {
//   width: '100%',
//   height: '300px'
// };

class Cumaica extends React.Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }


  render() {
    //console.log(process.env.REACT_APP_SFSPOTS_MAPS_API);
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={15}
          // style={mapStyles}
          initialCenter={{
            lat: 37.783138,
            lng: -122.461632
          }}>
          <Marker
            onClick={this.onMarkerClick}
            name={'Cumaica Coffee shop'}
          />
          <Marker
            onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 37.778519, lng: -122.405640}}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
          </InfoWindow>


          
        </Map>
        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_SFSPOTS_MAPS_API
})(Cumaica);

//module.exports = Cumaica