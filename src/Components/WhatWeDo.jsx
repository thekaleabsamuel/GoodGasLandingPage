import React from 'react';
import './WhatWeDo.css';
import album1 from '../assets/album1.jpeg';
import album2 from '../assets/album2.jpeg';
import album3 from '../assets/album3.png';
// import album4 from '../assets/album4.jpg';

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h2>What Do We Do?</h2>
      <div className="album-cards">
        <div className="album-card">
          <img src={album1} alt="Album 1" />
        </div>
        <div className="album-card">
          <img src={album2} alt="Album 2" />
        </div>
        <div className="album-card">
          <img src={album3} alt="Album 3" />
        </div>
        {/* <div className="album-card">
          <img src={album4} alt="Album 4" />
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDo;