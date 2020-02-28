import React from 'react'
import ReactDOM from 'react-dom'

import OlaMundo from './components/OlaMundo'
import Estudante from './components/Estudante'

const root = document.getElementById('root')
//ReactDOM.render(<OlaMundo nome='Jefferson' sobrenome='de Carvalho'/>,root);
ReactDOM.render(<Estudante 
                           idade= {18}
                           nome='Fulano'
                           cidade='Pindamonhagaba'
                           curso='Eng. Química'/>,root);

// const textoJsx = 
// <ul>
//     <li>1-)Superman</li>
//     <li>2-)Bátima</li>
//     <li>3-)Wonder Woman</li>
//     <li>3-)Wonder Woman</li>
// </ul> 

// ReacDOM.render(textoJsx,root)

// const root = document.getElementById('root');

// let ul = document.createElement('ul');

// let li1 = document.createElement('li');
// let texto1 =  document.createTextNode('1-)Superman');
// li1.appendChild(texto1);
// ul.appendChild(li1);

// let texto2 = document.createTextNode('2-)Batman');
// let li2 = document.createElement('li');
// li2.appendChild(texto2);
// ul.appendChild(li2);

// let texto3 = document.createTextNode('3-)Wonder Woman');
// let li3 = document.createElement('li');
// li3.appendChild(texto3);
// ul.appendChild(li3);

// root.appendChild(ul);

