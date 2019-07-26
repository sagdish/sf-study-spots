import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import '../components.css';

const apiKey = process.env.REACT_APP_SFSPOTS_MAPS_API;
let place;

class MapsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }



  
  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props.name,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    console.log('props: ', props);
    console.log('marker: ', marker);
    console.log('event: ', event);
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
    console.log(this.props)
    //console.log('google props:', this.props );
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
              <h3>{this.state.selectedPlace}</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey
})(MapsView);
