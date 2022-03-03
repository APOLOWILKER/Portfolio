import React from 'react';
import yotube from '../images/youtube-footer.svg';
import linkedin from '../images/linkedin-footer.svg';
import github from '../images/github-footer-svg.svg';
import instagram from '../images/instagram-footer.svg';
import {MdAlternateEmail} from 'react-icons/md';
import '../styles/Footer.css'

function Footer() {
  return ( 
    <div className='container-footer'>
      <div className='list-container'>
          <a href='https://www.youtube.com/channel/UCoyHazjRBTko4CEIu7_hkOQ' target="_blank" rel="noreferrer" ><li className='item-footer'><img src={yotube} alt="svg link to canal youtube" /></li></a>

          <a href='https://www.linkedin.com/in/apolowilkercarvalhosilva/' target="_blank" rel="noreferrer" ><li className='item-footer'><img src={linkedin} alt="svg link to linkedin" /></li></a>
          <a href='mailto:contatosapolowilker@gmail.com' target="_blank" rel="noreferrer" ><li className='item-footer'><MdAlternateEmail color='#00db5f' size={60}/></li></a>
          <a href='https://github.com/APOLOWILKER' target="_blank" rel="noreferrer" ><li><img src={github} alt="gitHub" /></li></a>
          <a href='https://www.instagram.com/agoradevweb/' target="_blank" rel="noreferrer" ><li><img src={instagram} alt="Instagram" /></li></a>
        </div>
      </div>
  );
}

export default Footer;