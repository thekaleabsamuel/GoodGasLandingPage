import React from 'react';
import WhatWeDo from './WhatWeDo';
import Contact from './Contact';
import bearImage from '../assets/bearImage2.png';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '', height: '100vh' }}>
      <div>
        {/* Bear animation */}
        <img src={bearImage} alt="Bear" />
        {/* Smoke animation
        <img src="" alt="" /> */}
        {/* Text animation */}
        <h1>Good Gas</h1>
      </div>

      <WhatWeDo />
      <Contact />
    </div>
  );
};

export default LandingPage; 