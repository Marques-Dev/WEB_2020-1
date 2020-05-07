import React, { Component } from 'react'
import missingno from '../../img/missingno.png'


export default class PokemonTableRow extends Component {
    
    render() {
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.props.id+'.png'
        return (
            <tr>
                <td style={{ textAlign: "center", padding:0}}>
                    
                    <button className='btn btn-outline-light' disabled={!this.props.jogador} onClick={()=>this.props.mudarEscolhido(this.props.index)}>
                        <img src={this.props.id<=10090?imgURL:missingno} alt={this.props.id} /><br/>   
                    </button> 
                    
                    
                </td>
            </tr>
        )
    }
}