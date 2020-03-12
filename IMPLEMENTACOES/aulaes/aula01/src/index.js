import React from 'react'
import ReactDOM from 'react-dom'

import CasaGenerica from './components/CasaGenerica'
import Personagem from './components/Personagem'

const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <CasaGenerica casa='Stark'>
            <Personagem nome='Arya' casa='Stark'/>
            <Personagem nome='John' casa='Stark' />
            <Personagem nome='Sansa' casa='Stark' />
        </CasaGenerica>
        <CasaGenerica casa='Baratheon'>
            <Personagem nome='Robert' casa='Baratheon'/>
            <Personagem nome='Jofrey' casa='Baratheon' />
        </CasaGenerica>
    </div>
    ,root)

//import OlaMundo from './components/OlaMundo'
//import Estudante from './components/Estudante'
//import {CapitaoAmerica as Ca,ViuvaNegra as Vn} from './components/Vingadores'
//import Casa from './components/Casa'
//import IMC from './components/imc/IMC'
//ReactDOM.render(<IMC/>,root)
// ReactDOM.render(
//                 <div>
//                     <Ca nome='Jefferson'/>
//                     <Vn nome='Wladimir'/>
//                 </div>
//                 ,root)

// const textoJSX = <Estudante nome='Fulano'
//                             idade='15'
//                             curso='Engenharia de Software'
//                             cidade='Quixadá'/> 
// ReactDOM.render(textoJSX,root)


//ReactDOM.render(<OlaMundo nome='Jefferson'/>,root)



/*ReactDOM.render(<h1>Olá mundo do React!</h1>,root)*/

/*const root = document.getElementById('root');
let h2 = document.createElement('h2');
let texto = document.createTextNode('Olá mundo!');
h2.appendChild(texto);
root.appendChild(h2);*/

/*const root = document.getElementById('root')

let ul = document.createElement('ul')

let li1 = document.createElement('li')
let texto1 = document.createTextNode('1-) Superman')
li1.appendChild(texto1)
ul.appendChild(li1)

let li2 = document.createElement('li')
let texto2 = document.createTextNode('2-) Bátima')
li2.appendChild(texto2)
ul.appendChild(li2)

let li3 = document.createElement('li')
let texto3 = document.createTextNode('3-) Wonder Woman')
li3.appendChild(texto3)
ul.appendChild(li3)

root.appendChild(ul)*/

// import React from 'react'
// import ReactDOM from 'react-dom'

// const root = document.getElementById('root')

// const meujsx = 
// <ul>
//     <li>1-) Superman</li>
//     <li>2-) Bátima</li>
//     <li>3-) Wonder Woman</li>
// </ul>

// ReactDOM.render(meujsx, root)

