import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialFollowT.css'

function SocialFollowT() {
  return (
    <div>
        <span className='social-container'>
        <a href="https://twitter.com/soframughlai" target="_blank" rel="noreferrer noopener" className="twitter-social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
        </span>
    </div>
  )
}

export default SocialFollowT