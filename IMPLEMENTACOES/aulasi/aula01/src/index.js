import React from 'react'
import ReactDOM from 'react-dom'

import IMCFuncao from './components/imc_funcao/IMCFuncao'
const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <IMCFuncao peso={89} altura={1.83}/>
    </div>
    ,root
)


/*ReactDOM.render(
    <div>
        <CasaGenerico casa='Stark' regiao='Norte'>
            <Personagem nome='Arya'/>
            <Personagem nome='John'/>
            <Personagem nome='Sansa'/>
        </CasaGenerico>
        <CasaGenerico casa='Baratheon' regiao='Sul'>
            <Personagem nome='Robert'/>
        </CasaGenerico>
    </div>
    ,root
)*/


// import OlaMundo from './components/OlaMundo'
// import Estudante from './components/Estudante'
// import Professor from './components/Professor'
//import {CapitaoAmerica as Ca,ViuvaNegra as Vn} from './components/Vingadores'
//import Casa from './components/Casa'
//import CasaGenerico from './components/CasaGenerico'
//import Personagem from './components/Personagem'


//ReactDOM.render(<Casa/>,root)

// ReactDOM.render(
//     <div>
//         <Ca nome='Fulano'/>
//         <Vn nome='Beltrano'/>
//     </div>
//     ,root
// )

// ReactDOM.render(
//     <div>
//     <Professor
//         nome='Wladimir'
//         area='Matemática'
//         nivel='Doutorado'
//         curso='Ciências da Computação'
//     />
//     <Estudante idade= {18}
//                nome='Fulano'
//                cidade='Pindamonhagaba'
//                curso='Eng. Química'/>
//     </div>
//     ,root);

//ReactDOM.render(<OlaMundo nome='Jefferson' sobrenome='de Carvalho'/>,root);
// ReactDOM.render(<Estudante 
//                            idade= {18}
//                            nome='Fulano'
//                            cidade='Pindamonhagaba'
//                            curso='Eng. Química'/>,root);

// const textoJsx = 
// <ul>
//     <li>1-)Superman</li>
//     <li>2-)Bátima</li>
//     <li>3-)Wonder Woman</li>
//     <li>3-)Wonder Woman</li>
// </ul> 

// ReacDOM.render(textoJsx,root)

// const root = document.getElementById('root');
//============================
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

