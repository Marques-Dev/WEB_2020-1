import React, { Component } from 'react';
import './App.css';
import Interval from './components/Interval'
import Average from './components/operations/Average'
import Random from './components/operations/Random'
import Sum from './components/operations/Sum'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {id:1}
    this.setId = this.setId.bind(this)
  }

  setId(id){
    this.setState({id})
  }

  render() {
    return (
      <div className='container'>
        <h1>Exercício React-Redux Simples</h1>
        <div className='line'>
          <Interval setId={this.setId}/>
        </div>
        <div className='line'>
          <Average id={this.state.id}/>
          <Random id={this.state.id}/>
          <Sum id={this.state.id}/>
        </div>
      </div>
    );
  }
}

export default App;
