import React from 'react'
import './Hero.css';

import hero_banner from '../Assests/hero_banner.jpg';

const Hero = () => {
  return (
    <div className='container hero rounded-pill'>
      <div className="hero-left">
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        <button className='hero-latest-btn'>
            Latest Collection
        </button>
      </div>
      <div className="hero-right me-4">
        {/* <img className='hero-image rounded-pill' src={hero_banner} alt="" /> */}
        <img src={hero_banner} className="img-fluid rounded-pill hero-image" alt="..."></img>
      </div>
    </div>
  )
}
export default Hero
