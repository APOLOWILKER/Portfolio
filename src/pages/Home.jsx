import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import apoloImg from '../images/myPicture.svg';
import '../styles/Home.css';


function Home() {
  return (
    <>
    <Header/>
    <div className='container-pages'>
      
      <div className='container-title'>
        <h1 className='title-page'>APOLO WILKER</h1>
        <p className='description-title'>Desenvolvedor Front-End</p>
      </div>

      <br />

      <div className='foto-perfil'>
        <img src={apoloImg} alt="Foto Apolo Wilker" />
      </div>

        <br />

        <div className='container-description'>
          <p className='description-text'>
            Um <b>ex-advogado</b> que resolveu mudar de carreira aos 28 anos de idade, por descobrir mais tarde que a sua <b>paixão por regras, padrões e resolução de problemas não estava no direito</b>.
            <p className='description-text'>
            Filho de nordestinos(Maranhenses), uma dona de casa e um Tecnico em contabilidade, que vieram para Goiás para ter uma vida melhor.
            Eu nasci em 1993, epoca que meus pais tinham extrema dificuldade financeira, mas graças a Deus tudo deu certo.
            </p>
            <p className='description-text'>
            Em meados do ano 2000 mil foi o meu primeiro contato com computadores e tecnologia, meu pai comprou <i><b>o primeiro computador da casa, o que ele não esperava era que eu iria primeiro desmontar ele para saber o que tinha la dentro!</b></i> 
            Depois eu consegui remontar faltando algumas peças, mas com a ajuda do meu Tio ele funcionou novamente.
            </p>
            <p className='description-text'>
            Em 2004, li uma noticia de que programadores JAVA com certificado da Oracle estavam sendo contratados para trabalhar na Australia e ganhar 7 mil dolares, eu achei aquilo sensacional e fiquei super animado para descobrir o que era esse tal de JAVA.
            </p>
            <p className='description-text'>
            Por vários motivos eu acabei não seguindo esse caminho, mas durante a pandemia voltei a ter mais tempo e mais contato com tecnologia, e por consequencia gastar mais tempo vendo videos de programação do que lendo jurisprudências.
            </p>
            <p className='description-text'>
            Após longa reflexão resolvi mudar de carreira, até tentei aprender o tal do JAVA com um colega que já é programador, mas gostei mais do JavaScript, então escolhi a Trybe, para aprender a programar e me tornar um Desenvolvedor Full-Stack trabalhando principalmente com React e Node.js.
            </p>
            <p className='description-text'>
            Para saber um pouco mais sobre a minha trajetoria, veja no Youtube ou Instagram!!
            </p>
          </p>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;