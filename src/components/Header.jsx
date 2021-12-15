import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return ( 
    <nav className='container-header'>
      <ul className='list-container-header'>
        <Link to="/"><li>HOMES</li></Link>
        <Link to="/about"><li>SOBRE</li></Link>
        <Link to="/projects"><li>PROJETOS</li></Link>
      </ul>
    </nav>
  );
}

export default Header;