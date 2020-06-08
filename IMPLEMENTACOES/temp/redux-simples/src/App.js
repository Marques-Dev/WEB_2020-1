import React, { Component } from 'react';
import './App.css';
import Interval from './components/Interval'
import Average from './components/operations/Average'
import Random from './components/operations/Random'
import Sum from './components/operations/Sum'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {min:0,max:0}
    this.setMin = this.setMin.bind(this)
    this.setMax = this.setMax.bind(this)
  }

  setMin(min){
    min = parseInt(min)
    this.setState({min})
  }

  setMax(max){
    max = parseInt(max)
    this.setState({max})
  }

  render() {
    return (
      <div className='App'>
        <h1>Exercício React-Redux Simples</h1>
        <div className='linha'>
          <Interval setMin={this.setMin} setMax={this.setMax}/>
        </div>
        <div className='linha'>
          <Average min={this.state.min} max={this.state.max}/>
          <Random min={this.state.min} max={this.state.max}/>
          <Sum min={this.state.min} max={this.state.max}/>
        </div>
      </div>
    );
  }
}

export default App;
