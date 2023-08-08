import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay='100' className='contact-main'>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100' className='heading'>
                Contact
            </div>
            <div className='columns'>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100' className='column-left'>

                    <p style={{ 'font-weight': 'bold', 'letter-spacing': '5px' }}>PHONE</p>
                    <p>7304699639</p>
                    {/* <p>2345678901</p> */}
                    <br />
                    <p style={{ 'font-weight': 'bold', 'letter-spacing': '5px' }}>LOCATION</p>
                    <p style={{ 'padding': '0px 10px 0px 10px' }}>Shop no.2 Miranda compound, Besides St. Charles High School, Vakola Masjid, Santacruz East, Mumbai</p>
                    <br />
                    <p style={{ 'font-weight': 'bold', 'letter-spacing': '5px' }}>OPEN HOURS</p>
                    <p>Monday - Sunday : 5pm - 2am</p>
                </div>
                <div className='column-middle'>
                    <div className='social-container-main'>
                        <span className='social-container-contact'>
                            <a href='https://www.instagram.com/soframughlai/?hl=en' target="_blank" rel="noreferrer noopener"
                                className='instagram-social'>
                                <FontAwesomeIcon icon={faInstagram} size='2x' />
                            </a>
                        </span>
                        <span  className='social-container-contact'>
                            <a href='https://www.facebook.com/soframughlai' target="_blank" rel="noreferrer noopener"
                                className='facebook-social'>
                                <FontAwesomeIcon icon={faFacebook} size='2x' />
                            </a>
                        </span>
                        <span className='social-container-contact'>
                            <a href="https://twitter.com/soframughlai" target="_blank" rel="noreferrer noopener"    className="twitter-social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </span>
                    </div>

                </div>
                <div className='column-right'>
                    <img className='mandalaGold' src='/mandalaGold.svg'></img>
                </div>
            </div>
        </div>
        
    )
    
}

export default Contact