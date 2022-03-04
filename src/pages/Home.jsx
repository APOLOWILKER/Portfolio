import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Home.css';
import apoloImg from '../images/myPicture.svg';


function Home() {
  return (
    <>
    <Header/>
    <div className='container-pages'>
      <div className='foto-perfil'>
        <img src={apoloImg} alt="Foto Apolo Wilker" />
      </div>
        <h1 className='title-page'>APOLO WILKER</h1>
        <br />
        <p className='description-text'>Um advogado que resolveu mudar de carreira aos 28 anos de idade, por ter se frustrado demais com a carreira. <br />
        Escolhi a escola de programação trybe para isso, e nela aprendi todas essas tecnologias e me tornei um full-stack.
        Para saber um pouco mais sobre a minha trajetoria, veja no Youtube ou Instagram!!
        </p>
    </div>
    <Footer />
    </>
  );
}

export default Home;