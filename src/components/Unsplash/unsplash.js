import React, { Component } from 'react';
import axios from 'axios';

import './unsplash.css';

export default class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loaded: false,
    }
  }
  
  componentDidMount() {
    const random10 = Math.floor(Math.random() * 10);
    const images = [];
    // check to see if origin is coming from library, if yes - search for library related photos
    const keyWord = this.props.origin === "library" ? "library" : "coffee"
    axios.get(`https://api.unsplash.com/search/photos?page=${random10}&query=${keyWord}%20shop&client_id=${process.env.REACT_APP_UNSPLASH_API}`)
      .then(response => {
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
    console.log('images', this.state.images)
    // console.log('unsplash props', this.props);
    // console.log('random image ', randomImage);
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
