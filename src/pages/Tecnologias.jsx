import React from 'react';
import CardTec from '../components/CardTec';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Tecnologias.css'


function About() {
  return ( 
    <>
    <Header />
    <div className="container-tecnologias-screen">
      <h1 className="text-title">TECNOLOGIAS</h1>
      <CardTec/>
    </div>
    <Footer />
    </>
  );
}

export default About;
