import React from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div  className='about-main'>
      <div >
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100'  className='heading'>
          About
        </div> 
        <div className='image-container'>
         <img data-aos="fade-up"
     data-aos-duration="2000" data-aos-delay='100' className='image' src='/imagesFolder/ShopImage.JPG'/>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="2000" data-aos-delay='100' className='about-text'>
          <span>In Turkish language Sofra means a table prepared or set for eating a meal. 
            We opened up in 2022 to serve you authentic Mughlai cuisine to give a treat to your taste buds.
            We specialiaze in contemporary interpretations of the traditional Mughlai Cuisines giving you a variety of food items to taste from.
            Grab a tawa roll for yourself or indulge in the savoury and lip-smacking gravies with the indian flatbreads; 
            or dive into the tandoor for some amazing chicken and paneer tikkas.
            So with that in mind, We Welcome you to dine with us and have an experience like never before.

         
      
        </span>
        </div>
        </div>
    </div>
  )
}

export default About