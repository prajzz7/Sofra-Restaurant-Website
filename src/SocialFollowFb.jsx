import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialFollowFb.css'

function SocialFollowFb() {
  return (
    <div>
        <span className='social-container'>
                <a href='https://www.facebook.com/soframughlai' target="_blank" rel="noreferrer noopener"
            className='facebook-social'>
                <FontAwesomeIcon icon={faFacebook} size='2x'/>
                </a>
        </span>
    </div>
  )
}

export default SocialFollowFb