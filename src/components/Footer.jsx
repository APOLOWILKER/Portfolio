import React from 'react';
import yotube from '../images/01Youtube.svg';
import linkedin from '../images/01Linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import '../styles/Footer.css'

function Footer() {
  return ( 
    <div className='container-footer'>
    <div className='list-container'>
      <a href='https://www.youtube.com/channel/UCoyHazjRBTko4CEIu7_hkOQ' target="_blank" rel="noreferrer" ><li className='item-footer'><img src={yotube} alt="svg link to canal youtube" /></li></a>

      <a href='https://www.linkedin.com/in/apolowilkercarvalhosilva/' target="_blank" rel="noreferrer" ><li className='item-footer'><img src={linkedin} alt="svg link to linkedin" /></li></a>
    </div>
    <div className='list-container'>
      <a href='https://github.com/APOLOWILKER' target="_blank" rel="noreferrer" ><li><img src={github} alt="link canal youtube" /></li></a>
      <a href='mailto:contatosapolowilker@gmail.com' target="_blank" rel="noreferrer" ><li className='item-footer'><img src={email} alt="svg link to send email" /></li></a>
      </div>
  </div>
  );
}

export default Footer;