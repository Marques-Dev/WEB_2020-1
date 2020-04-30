import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import axios from 'axios'

export default class TableRow extends Component {

    getPokemonIdByURL(url){
        var tokens = url.split('/')
        return tokens[tokens.length-2]
    }
    
    render() {
        const id = this.getPokemonIdByURL(this.props.pokemon.url)
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'
        return (
            <tr>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    {id}:{this.props.position}
                </td>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    <strong><p style={{textTransform:"capitalize"}}>{this.props.pokemon.name}</p></strong>
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <img src={imgURL} alt={id} />
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle"}}>
                    <button className="btn btn-primary" >Informações</button>
                    <button className="btn btn-danger" style={{marginLeft:20}}>Capturar</button>
                </td>
            </tr>
        )
    }
}