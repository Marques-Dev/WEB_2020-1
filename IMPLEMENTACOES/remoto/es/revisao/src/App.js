import React from 'react';
import './App.css';

import OlaMundo from './components/OlaMundo';
import MeuProps from './components/MeuProps'
import { HomemDeFerro as HDF, ViuvaNegra  as VN} from './components/Vingadores'
import Epoca from './components/dark/Epoca'
import Personagem from './components/dark/Personagem'

function App() {
  return (
    <div className="App">
      <h1>Jefferson de Carvalho</h1>
      <OlaMundo />
      <MeuProps
        nome='Jefferson'
        cidade='Quixadá'
        alunos={['José', 'Bento', 'Maria']} />
      <HDF nome='Fulano'/>
      <VN nome='Sicrano'/>
      <Epoca>
        <Personagem nome='Jonas' epoca='2019'/>
        <Personagem nome='Mikkel' epoca='1986'/>
        <Personagem nome='Ulrich' epoca='1953'/>
        <Personagem nome='Hanna' epoca='1953'/>
      </Epoca>
    </div>
  );
}

export default App;
