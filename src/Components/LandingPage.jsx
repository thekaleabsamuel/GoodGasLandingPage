import React from 'react';
import WhatWeDo from './WhatWeDo';
import Contact from './Contact';
import bearImage from '../assets/bearImage.png';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#ffd404', height: '100vh' }}>
      <div>
        {/* Bear animation */}
        <img src={bearImage} alt="Bear" />
        {/* Smoke animation */}
        <img src="https://i.giphy.com/ftfVpeWsm95QgGfOZ8.webp" alt="Smoke" />
        {/* Text animation */}
        <h1>Good Gas</h1>
      </div>

      <WhatWeDo />
      <Contact />
    </div>
  );
};

export default LandingPage;