import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return ( 
    <nav className='container-header'>
      <ul className='list-container-header'>
        <Link to="/"><li className='item-header'>HOME</li></Link>
        <Link to="/projects"><li className='item-header'>PROJETOS</li></Link>
        <Link to="/about"><li className='item-header'>TECNOLOGIAS</li></Link>
      </ul>
    </nav>
  );
}

export default Header;