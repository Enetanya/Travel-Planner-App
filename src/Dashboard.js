
// components/Dashboard.js (Dashboard Component)
import React from 'react';
import RandomQuote from './RandomQuote';
import RotatingEarth from './RotatingEarth';

function Dashboard({onLogout}) {
  
  
  
return (
    <div className="dashboard">
      <h1 className="dashboard">Travel Planner App</h1>
           {/* Use the RotatingEarth component to display the rotating Earth */}
      <RotatingEarth />
      <h2 >Explore the World</h2>
      <RandomQuote />
      {/* Rendering components */}
    </div>
  );
}


export default Dashboard; 
