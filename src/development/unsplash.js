import React, { Component } from 'react';
import axios from 'axios';

import './unsplash.css';

export default class Unsplash extends Component {
  state = {
    images: [],
    loaded: false,
  }
  
  componentDidMount() {
    const random10 = Math.floor(Math.random() * 10);
    const images = [];
    axios.get(`https://api.unsplash.com/search/photos?page=${random10}&query=coffee%20shop&client_id=${process.env.REACT_APP_UNSPLASH_API}`)
      .then(response => {
        //console.log(process.env.REACT_APP_UNSPLASH_API);
        // console.log(response);
        response.data.results.map(res => 
          images.push(res.urls.thumb)
        );
        return images;
      })
      .then(images => this.setState({ images, loaded: true }))
      .catch(err => console.log(err));
  }
  
  render() {
    const random10 = Math.floor(Math.random() * 10);
    const randomImage = this.state.images[random10];
    // console.log('unsplash state', this.state);
    console.log('random image ', randomImage);
    return (
      <div className="thumbNail">
        {this.state.loaded ? 
          <img
          src={randomImage}
          alt='coffee shop from Unsplash API'
          /> : <div>Loading...</div> }
      </div>
    )
  }
}
