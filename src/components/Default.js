import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade'

import './components.css';
import { hidden } from 'ansi-colors';


// This will be greeting component, which will welcome new user 
// and suggests to exlore it.


class Coffee extends React.Component {
  state = {
    showButton: false,
  }

  
  render() {

    setTimeout(()=> {
      this.setState({ showButton: true })
    }, 5000)

    return (
      <div className="welcome">
        <Fade right>
          <h1>WELCOME</h1>
        </Fade>
        <p>Hi, I decided to create this app as a guide of the study friendly coffee shops in San Francisco. 
          In my journey learning how to code, one of the big obstacles were finding suitable place to study and focus.
        </p>
        <Link to="/home">
          {this.state.showButton?
          <Fade top><Button size="large" style={{
              backgroundColor: "#8a4ddb",
              color: "white"
            }}>
            Explore It
          </Button></Fade> : <button style={{display: "hidden", marginTop: "22px"}}></button> }
        </Link>
      </div>
    );
  }
}

export default Coffee;