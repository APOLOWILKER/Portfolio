import React from 'react';
import pokemonBattle from '../images/Pokemon-battle.png';
import countdown from '../images/Countdown.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Projects.css';
import ButtonProject from '../components/ButtonsProject';

function Projects() {
  return (
    <>
    <Header />
    <div className='container-project-screen'>
      <h1 className='title-projec-page'>PROJETOS</h1>
      <div className='container-card-projects'>
        <div className='card-projects'>
        <img src={pokemonBattle} alt="Foto Apolo Wilker" />
        <p>POKEMON BATTLE</p>
        </div>
        <ButtonProject />
        <div className='card-projects'>
          <img src={countdown} alt="Foto Apolo Wilker" />
          <p>COUNTDOWN-APP</p>
        </div>
        <div className='card-projects'></div>
        <div className='card-projects'></div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
