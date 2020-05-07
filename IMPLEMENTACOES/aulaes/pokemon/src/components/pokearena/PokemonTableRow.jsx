import React, { Component } from 'react'
import missingno from '../../img/missingno.png'


export default class PokemonTableRow extends Component {

    renderizarCelula() {
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.props.id + '.png'
        if (this.props.jogador) {
            return (
                <button className='btn btn-outline-light' 
                        onClick={() => this.props.mudarEscolhido(this.props.index)}
                        style={{padding:0,margin:0,borderRadius:0}}>
                    <img src={this.props.id <= 10090 ? imgURL : missingno} alt={this.props.id} />
                </button>
            )
        }
        return(
            <img src={this.props.id <= 10090 ? imgURL : missingno} alt={this.props.id} />
        )
    }

    render() {
        
        return (
            <tr>
                <td style={{ textAlign: "center", padding: 0 }}>
                    {this.renderizarCelula()}
                </td>
            </tr>
        )
    }
}