import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Home.css';
import apoloImg from '../images/myPicture.svg';
import CardTec from '../components/CardTec';


function Home() {
  return (
    <>
    <Header/>
    <h1 className='title-page'>APOLO WILKER</h1>
    <div className='foto-perfil'>
    <img src={apoloImg} alt="Foto Apolo Wilker" />
    </div>
    <div>
      <h2 className='sub-title'>TECNOLOGIAS & FERRAMENTAS</h2>
    </div>
    <CardTec />
    <Footer />
    </>
  );
}

export default Home;