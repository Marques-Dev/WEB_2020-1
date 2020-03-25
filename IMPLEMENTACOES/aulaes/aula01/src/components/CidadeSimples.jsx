import React, { Component } from 'react'

export default class CidadeSimples extends Component {
    
    constructor(){
        super()
        this.state = {fortaleza:0, quixada:0}
    }

    render() {
        return (
            <div>
                <h3>Fortaleza: {this.state.fortaleza}</h3>
                <h3>Quixadá: {this.state.quixada}</h3>
                <button onClick={() => { 
                        this.setState({fortaleza:this.state.fortaleza+1}) 
                        }}>
                    Vote em Fortaleza
                </button>
                <button onClick={() => { 
                        this.setState({quixada:this.state.quixada+1}) 
                        }}>
                    Vote em Quixadá
                </button>
            </div>
        )
    }
}

/*export default props=>{
    let fortaleza = 0
    let quixada = 0
    return(
        <div>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Quixadá: {quixada}</h3>
            <button onClick={ ()=>{console.log('fortaleza')} }>
                Vote em Fortaleza
            </button>
            <button>
                Vote em Quixadá
            </button>
        </div>
    )
}*/