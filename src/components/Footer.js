import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


//    This is Footer Component which is COMMON in all the pages.

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerHeading'>Shopping List</div>
      <div className='brands'>
        <FontAwesomeIcon className='brandFoot' icon={faFacebook} />
        <FontAwesomeIcon className='brandFoot' icon={faInstagram} />
        <FontAwesomeIcon className='brandFoot' icon={faTwitter} />
      </div>
    </div>
  )
}

export default Footer