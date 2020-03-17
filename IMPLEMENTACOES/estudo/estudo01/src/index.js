import React from 'react';
import ReactDOM from 'react-dom';

//import IMC from './components/IMC';
//import Pai from './components/Pai';
//import Cidades from './components/Cidades'; 
//import MinhaClasse from './components/MinhaClasse';
//import Contador from './components/Contador';
//import CidadeSimples from './components/CidadeSimples'

import Curso from './components/exe/Curso'
import Turma from './components/exe/Turma'
import Estudante from './components/exe/Estudante'

const root = document.getElementById('root');
ReactDOM.render(
    <div>
        <Curso curso='SI'>
            <Turma turma='FUP' curso='SI'>
                <Estudante nome='Jefferson'/>
            </Turma>
        </Curso>
    </div>, root);


