import React from 'react';
import '../styles/CardTec.css';
import JAVASCRIPT from '../images/JAVASCRIPT.svg';
import HTML from '../images/HTML.svg';
import CSS from '../images/CSS.svg';
import LINUX from '../images/LINUX.svg';
import GIT from '../images/GIT.svg';
import VSCODE from '../images/VSCODE.svg';
import FIGMA from '../images/FIGMA.svg';
import GITHUB from '../images/GITHUB.svg';
import REACT from '../images/REACT.svg';
import JEST from '../images/JEST.svg';
import REDUX from '../images/REDUX.svg';
import RTL from '../images/RTL.svg';


function CardTec() {

  // const imgArr01 = {
  //   img:[GITHUB, GIT, VSCODE, FIGMA, CSS, HTML ],
  //   name: ['GitHub-Tecnologia', 'Git-Tecnologia', 'VScode-Ferramenta', 'Figma-Ferramenta', 'CSS-Tecnologia', 'HTML-Tecnologia']
  // }

  // const imgArr02 = {
  //   img: [ JAVASCRIPT, JEST, REACT, REDUX, RTL, LINUX],
  //   name: ['JavaScript-Tecnologia', 'Jest-Tecnologia-Testes', 'React-Tecnologia', 'Redux-Tecnologia-Biblioteca', 'RTL-Tecnologia-Testes-Biblioteca', 'Linux-Ferramenta' ]
  // }

  
  // https://www.w3schools.com/howto/howto_js_collapsible.asp
  
  // const arrColapse01 = {
    //   title: [ 'GITHUB', 'GIT', 'VSCODE', 'FIGMA', 'CSS', 'HTML'],
    //   description: [
      //     'Plataforma de gerenciamento de código, tenho conhecimento sobre forks, criação de PR, criação de repositório, fazer deploy de aplicações no GitHub Pages',
      //     'Sistema de controle de versionamento, comandos básicos, como git Pull, git commit, git add, e manipulação ou criação de branchs',
      //     'Um editor de código  da Microsoft, que é uma das ferramentas mais utilizadas pelos desenvolvedores',
      //     'Ferramenta de design online. Meu conhecimento sobre é basico, criação de alguns layouts simples',
      //     'Linguagem de Estilo, meus conhecimentos são: position, flex-box, seletores, box-model, tipos numéricos e unidades comuns',
      //     'Linguagem de marcação HTML, elementos html, links, caminhos e URLS, Tabelas, formulários'
      //   ]
      // }
      
      // const arrColapse02 = {
        //   title: [ 'JAVASCRIPT', 'JEST', 'REACT', 'REDUX', 'RTL', 'LINUX'],
        //   description: [
          //     'Os conhecimentos que posso são sobre: Tipos primitivos, objetos, arrays, ES6, spreead operator, template literals, HOFS, funções, operador lógico, condicionais, operador ternario, estruturas de repetição',
          //     'Jest é um framework de testes em JavaScript: Mock Functions, methods Expect, to be, matchs, testes assincronos',
          //     'React: Components, props, ciclo de vida de componentes, estados',
          //     'Gerenciamento de Estado Global com Redux, testes em react-redux, usando redux em componentes de classe',
          //     'Utilização de Queries, simulação de eventos com RTL, Teste de fluxos lógicos, Mocks e inputs, React-Router, Testes Assincronos',
          //     'Manipulação de Terminal, facilidade na criaçao e inplementação do ambiente de desenvolvimento para programar.',
          //   ]
          // }

          const imgTecnos = {
            img: [ JAVASCRIPT, HTML, CSS, LINUX, GIT, VSCODE, FIGMA, GITHUB, REACT, JEST, REDUX, RTL ],
            name: [ 'JavaScript-Tecnologia', 'HTML-Tecnologia', 'CSS-Tecnologia', 'Linux-Ferramenta', 'Git-Tecnologia', 'VScode-Ferramenta', 'Figma-Ferramenta', 'GitHub-Tecnologia', 'React-Tecnologia', 'Redux-Tecnologia-Biblioteca', 'RTL-Tecnologia-Testes-Biblioteca'  ]
          }
          
    return (
      <div className="container-cards">
        {imgTecnos.img.map((tecFerr) => 
          <div 
          className="card-img-tec"
          onClick=""
          >
          {<img src={tecFerr} alt='imgtec'/>}
        </div>
      )}
    </div>
  )
}

export default CardTec;