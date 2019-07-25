import React, { Component } from 'react';
import axios from 'axios';


export default class Unsplash extends Component {
  state = {
    images: '',
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/search/photos?page=7&query=coffee shop&client_id=${process.env.REACT_APP_UNSPLASH_API}`)
      .then(response => {
        console.log(process.env.REACT_APP_UNSPLASH_API);
        console.log(response);
        this.setState({ images: response.data.results[0].urls.thumb });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <img
        src={this.state.images} 
        style={{ 
          width: 200,
          maxHeight: 200,
          borderRadius: 100
        }}
        alt='new'
        />
      </div>
    )
  }
}
