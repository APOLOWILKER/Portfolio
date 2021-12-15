import React from 'react';
import yotube from '../images/youtube.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import '../styles/Footer.css'

function Footer() {
  return ( 
    <nav className='container-footer'>
    <ul className='list-container'>
      <a href='https://www.youtube.com/channel/UCoyHazjRBTko4CEIu7_hkOQ' target="_blank" rel="noreferrer" ><li><img src={yotube} alt="svg link to canal youtube" /></li></a>
      <a href='https://www.linkedin.com/in/apolowilkercarvalhosilva/' target="_blank" rel="noreferrer" ><li><img src={linkedin} alt="svg link to linkedin" /></li></a>
      <a href='https://github.com/APOLOWILKER' target="_blank" rel="noreferrer" ><li><img src={github} alt="link canal youtube" /></li></a>
      <a href='mailto:contatosapolowilker@gmail.com' target="_blank" rel="noreferrer" ><li><img src={email} alt="svg link to send email" /></li></a>
    </ul>
  </nav>
  );
}

export default Footer;