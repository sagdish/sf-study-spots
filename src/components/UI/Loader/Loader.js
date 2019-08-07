import React from 'react';

import './loader.css'

export default function Loader() {
  return(
    <div className='loading-container'>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}