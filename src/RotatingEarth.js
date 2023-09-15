// RotatingEarth.js

import React from 'react';
import "./WorldPicture.jpg"
import './App.css';


function RotatingEarth() {
  return (
    <div className="image-container">
      <img className="rotating-earth" src={require("./WorldPicture.jpg" )} alt="Rotating Earth"/>
    
    </div>
  );
}

export default RotatingEarth;