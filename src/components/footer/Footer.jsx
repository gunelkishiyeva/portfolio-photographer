import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './footer.css'
const Footer = () => {
  // You can replace the '#' with your actual social media profile URLs
  const linkedinUrl = 'https://www.linkedin.com/in/nubar-kishiyeva-820b67267/';
  const twitterUrl = '#';
  const instagramUrl = 'https://www.instagram.com/nubarkishiyeva/';
  return (
    <div className='footer'>
      <div className="social-media">
      
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
    
      </div>
      <div className="logo">
        ehfe
      </div>
      <div className="mail"><p>nubar.kishiyeva@gmail.com</p></div>
      </div>
  )
}

export default Footer