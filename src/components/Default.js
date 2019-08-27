import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './components.css';


// This will be greeting component, which will welcome new user 
// and suggests to exlore it.


class Coffee extends React.Component {
  render() {
    return (
      <div className="welcome">
          <Link to="/home">
            <Button size="large" style={{
                backgroundColor: "#8a4ddb",
                color: "white"
              }}>
              Explore My Web App
            </Button>
            {/* <button type="primary">who loves coffee?</button> */}
          </Link>
      </div>
    );
  }
}

export default Coffee;