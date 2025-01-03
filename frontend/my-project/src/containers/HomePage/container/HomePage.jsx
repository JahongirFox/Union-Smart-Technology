import React from 'react';
import './HomePage.css'
import Home1 from '../components/Home1/Home1';
import Home2 from '../components/Home2/Home2';
import Home3 from '../components/Home3/Home3';
import Home4 from '../components/Home4/Home4';
import Home5 from '../components/Home5/Home5';

function HomePage() {
  return (
        <div className='homepage-container'>
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
        </div>
  );
}

export default HomePage;
