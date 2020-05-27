import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <h1>Exercício React-Redux Simples</h1>
      <div className='linha'>
        <Card title='Card 1' red>XY</Card>
        <Card title='Card 2' blue>XY</Card>
      </div>
      <div className='linha'>
        <Card title='Card 3' green>XY</Card>
        <Card title='Card 4' purple>XY</Card>
      </div>
    </div>
  );
}

export default App;
