import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';

import './components.css';

// This will be greeting component, which will welcome new user 
// and suggests to exlore it.

function Coffee () {
  
  const [ showButton, setButton ] = useState(false);

  setTimeout(()=> {
    setButton(true)
  }, 2000);

  return (
    <div className="welcome">
      <div>
      <Fade right>
        <h1>WELCOME</h1>
      </Fade>
      <p className="introText">Hi, I decided to create this app as a guide of the study friendly coffee shops in San Francisco. 
        In my ongoing journey learning how to code, one of the big obstacles is finding suitable place to study and focus.
      </p>
      </div>
      <div className="slideReveal">
        {showButton ?
        <Link to="/home">
          <Fade top><Button size="large" style={{
              backgroundColor: "#8a4ddb",
              color: "white"
            }}>
            Explore It
          </Button></Fade> 
        </Link> : null }
      </div>
    </div>
  );
}

export default Coffee;