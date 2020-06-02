import React, { Component } from 'react';
import './App.css';
import Navigate from './components/Navigate'
import Average from './components/PokemonFront'
import Random from './components/PokemonBack'
import Sum from './components/PookemonInfo'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Exercício React-Redux Simples</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <Average />
          <Random />
          <Sum />
        </div>
      </div>
    );
  }
}

export default App;
