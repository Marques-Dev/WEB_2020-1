import React, { Component } from 'react'
import missingno from '../../img/missingno.png'


export default class PokeballTableRow extends Component {
    
    render() {
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.props.id+'.png'
        return (
            <tr>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    {this.props.id}
                </td>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    <strong><p style={{textTransform:"capitalize"}}>{this.props.nome}</p></strong>
                </td>
                <td>
                    <img src={this.props.id<=10090?imgURL:missingno} alt={this.props.id} />
                </td>
            </tr>
        )
    }
}