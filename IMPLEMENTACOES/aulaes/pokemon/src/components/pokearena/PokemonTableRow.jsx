import React, { Component } from 'react'
import missingno from '../../img/missingno.png'


export default class PokemonTableRow extends Component {

    renderizarCelula() {
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.props.id + '.png'
        if (this.props.jogador) {
            return (
                <button className='btn btn-outline-light' 
                        onClick={() => this.props.mudarEscolhido(this.props.index)}
                        style={{padding:0,margin:0,borderRadius:0,border:'none'}}>
                    <img src={this.props.id <= 10090 ? imgURL : missingno} alt={this.props.id} />
                </button>
            )
        }
        let opacity = this.props.life/100
        return(
            
            <img 
                src={this.props.id <= 10090 ? imgURL : missingno} 
                alt={this.props.id} 
                style={{opacity:opacity}}
                />
        )
    }

    render() {
        
        return (
            <div className='row'>
                <div className='col-12 text-center'>
                    {this.renderizarCelula()}
                </div>
            </div>
        )
    }
}