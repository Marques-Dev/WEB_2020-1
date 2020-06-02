import React, { Component } from 'react'
import './App.css'

import Card from './components/Card'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Minicurso React-Redux</h1>
        <div className='line'>
          <Card title='Professor' red>
            <h1>Jefferson</h1>
            <strong>de Carvalho</strong>
          </Card>
        </div>
        <div className='line'>
          <Card title='Disciplina' blue/>
          <Card title='Universidade' green/>
          <Card title='Curso' dark/>
        </div>
      </div>
    )
  }
}