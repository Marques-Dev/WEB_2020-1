import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import axios from 'axios'

export default class TableRow extends Component {
    
    render() {
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.props.id+'.png'
        return (
            <tr>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    {this.props.id}
                </td>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    <p style={{textTransform:"capitalize"}}>{this.props.pokemon.name}</p>
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <img src={imgURL} alt={this.props.id} />
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle"}}>
                    <button className="btn btn-primary" >Informações</button>
                    <button className="btn btn-danger" style={{marginLeft:20}}>Capturar</button>
                </td>
            </tr>
        )
    }
}