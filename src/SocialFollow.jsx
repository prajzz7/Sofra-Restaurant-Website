import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import './SocialFollow.css'

function SocialFollow() {
  return (
    <>
    <div className='social-container'>
        <a href='https://www.instagram.com/soframughlai/?hl=en' target="_blank" rel="noreferrer noopener"
           className='instagram-social'>
               <FontAwesomeIcon icon={faInstagram} size='2x'/>
        </a>
    </div>
    
    </>
  )
}

export default SocialFollow