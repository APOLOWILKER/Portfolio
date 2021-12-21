import React from 'react';
import '../styles/CardTec.css';
import GITHUB from '../images/GitHub.svg';
import GIT from '../images/git.svg';
import VSCODE from '../images/Vscode.svg';
import FIGMA from '../images/Figma.svg';
import CSS from '../images/CSS.svg';
import HTML from '../images/HTML.svg';
import JS from '../images/JavaScript.svg';
import JEST from '../images/JEST.svg';
import REACT from '../images/React.svg';
import REDUX from '../images/Redux.svg';
import RTL from '../images/RTL.svg';
import LINUX from '../images/Linux.svg';


function CardTec() {

  const imgArr01 = {
    img:[GITHUB, GIT, VSCODE, FIGMA, CSS, HTML ],
    name: ['GitHub-Tecnologia', 'Git-Tecnologia', 'VScode-Ferramenta', 'Figma-Ferramenta', 'CSS-Tecnologia', 'HTML-Tecnologia']
  }

  const imgArr02 = {
    img: [ JS, JEST, REACT, REDUX, RTL, LINUX],
    name: ['JavaScript-Tecnologia', 'Jest-Tecnologia-Testes', 'React-Tecnologia', 'Redux-Tecnologia-Biblioteca', 'RTL-Tecnologia-Testes-Biblioteca', 'Linux-Ferramenta' ]
  }

  // https://www.w3schools.com/howto/howto_js_collapsible.asp

  const arrColapse01 = {
    title: [ 'GITHUB', 'GIT', 'VSCODE', 'FIGMA', 'CSS', 'HTML'],
    description: [
      'Plataforma de gerenciamento de código, tenho conhecimento sobre forks, criação de PR, criação de repositório, fazer deploy de aplicações no GitHub Pages',
      'Sistema de controle de versionamento, comandos básicos, como git Pull, git commit, git add, e manipulação ou criação de branchs',
      'Um editor de código  da Microsoft, que é uma das ferramentas mais utilizadas pelos desenvolvedores',
      'Ferramenta de design online. Meu conhecimento sobre é basico, criação de alguns layouts simples',
      'Linguagem de Estilo, meus conhecimentos são: position, flex-box, seletores, box-model, tipos numéricos e unidades comuns',
      'Linguagem de marcação HTML, elementos html, links, caminhos e URLS, Tabelas, formulários'
    ]
  }

  const arrColapse02 = {
    title: [ 'JAVASCRIPT', 'JEST', 'REACT', 'REDUX', 'RTL', 'LINUX'],
    description: [
      'Os conhecimentos que posso são sobre: Tipos primitivos, objetos, arrays, ES6, spreead operator, template literals, HOFS, funções, operador lógico, condicionais, operador ternario, estruturas de repetição',
      'Jest é um framework de testes em JavaScript: Mock Functions, methods Expect, to be, matchs, testes assincronos',
      'React: Components, props, ciclo de vida de componentes, estados',
      'Gerenciamento de Estado Global com Redux, testes em react-redux, usando redux em componentes de classe',
      'Utilização de Queries, simulação de eventos com RTL, Teste de fluxos lógicos, Mocks e inputs, React-Router, Testes Assincronos',
      'Manipulação de Terminal, facilidade na criaçao e inplementação do ambiente de desenvolvimento para programar.',
    ]
  }

  function colapsed(name, target) {
    console.log(name);  
    switch (name) {
      case 'GITHUB':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'GIT':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'VSCODE':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'FIGMA':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'HTML':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'CSS':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'JAVASCRIPT':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'JEST':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'REACT':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'REDUX':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'RTL':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      case 'LINUX':
        if(target.nextSibling.className === 'content') {
          target.nextSibling.className= ''
        } else { 
          target.nextSibling.className= 'content';
        }
      break;
      default:
        break;
    } 
  }

  return (
    <div className='container-img-lines'>
      <div className='container-first-line'>
      {imgArr01.img.map((img, i) => 
      <div className='container'>
        <img onClick={ ({target}) => colapsed(arrColapse01.title[i], target)} className='style-img collapsible' src={img} alt={imgArr01.name[i]} />
        <div className='content'>
          <p className='title-style-card'>{arrColapse01.title[i]}</p>
          <p>{arrColapse01.description[i]}</p>
        </div>
        </div>
        )} 
      </div>

      <div className='container-second-line'>
      {imgArr02.img.map((img, i) => 
        <div className='container'>
          <img onClick={ ({target}) => colapsed(arrColapse02.title[i], target)} className='style-img collapsible' src={img} alt={imgArr02.name[i]} />
          <div className='content'>
          <p className='title-style-card'>{arrColapse02.title[i]}</p>
          <p>{arrColapse02.description[i]}</p>
        </div>
        </div>
        )} 
      </div>
    </div>
  );
}

export default CardTec;