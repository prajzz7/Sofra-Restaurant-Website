import React from 'react'
import './OrderButtons.css'
import Aos from 'aos';

import { useEffect } from 'react';
import mandala from '../logos/mandala-orderArea.svg'

function OrderButtons() {

  useEffect(() => {
    Aos.init({duration: 2000})
    Aos.refresh();
  }, []);
  
  const zomato = () => {
    window.open("https://www.zomato.com/mumbai/sofra-a-mughlai-delicacy-santacruz-east")
  }
  const swiggy = () => {
    window.open("https://www.swiggy.com/restaurants/sofra-a-mughlai-delicacy-scruz-bandra-east-mumbai-525308")
  }
  
  return (
    
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className='orderArea'>
<div className='neon-light'></div>
        <div className='text'>
         
            Order Now
          
        </div>
        <div className='neon-light-right'></div>
        <div className='btn'>
            <button className="custom-btn btn-3" onClick={swiggy}>SWIGGY</button>
            <button className="custom-btn btn-3" onClick={zomato}>ZOMATO</button>
        </div>
    </div>
    
  )
}

export default OrderButtons
