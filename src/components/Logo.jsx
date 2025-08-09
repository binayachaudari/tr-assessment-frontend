import React from 'react';
import atmSign from '../assets/atm_sign.png';
import graffiti from '../assets/graffiti.png';

const Logo = () => {
  return (
    <div className="relative px-18 py-4 bg-[#136cae] rounded-2xl">
      <img src={graffiti} className="absolute top-8 left-50" alt="Graffiti" />
      <img src={atmSign} id="logo" alt="ATM Logo" />
    </div>
  );
};

export default Logo;
