import React from 'react';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero=()=>{
  return <>
  <div className='hero container'>
    <div className="hero-text">
      <h1>From Our Fields to Your Table: Fresh, Organic Goodness Delivered Daily</h1>
      <p>Explore a wide variety of seasonal fruits, vegetables, and flowers grown with love and care.</p>

      <button className="btn">Browse Our Produce <img src={dark_arrow}></img></button>

    </div>
  </div>

  </>
}

export default Hero