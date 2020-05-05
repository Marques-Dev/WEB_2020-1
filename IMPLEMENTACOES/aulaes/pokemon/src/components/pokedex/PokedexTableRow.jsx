import React, { Component } from 'react'
import missingno from '../../img/missingno.png'
import { Link } from 'react-router-dom'
//import axios from 'axios'

export default class TableRow extends Component {

    getPokemonIdByURL(url){
        var tokens = url.split('/')
        return tokens[tokens.length-2]
    }

    capturar(id,nome){
        let pokeball = JSON.parse(sessionStorage.getItem('pokeball'))        
        if(!pokeball){
            pokeball = []
        }

        if(pokeball.length===6){
            alert('Capacidade máxima da Pokebola atingida.')
            return
        }

        for (let index = 0; index < pokeball.length; index++) {
            const element = pokeball[index];
            if(id===element.id) {
                alert('Pokemon já capturado! Escolha outro.')
                return
            }
        }
        pokeball.push({id:id,nome:nome,life:100})
        sessionStorage.setItem('pokeball',JSON.stringify(pokeball))
        alert('Pokemon capturado com sucesso!')
    }
    
    render() {
        const id = this.getPokemonIdByURL(this.props.pokemon.url)
        const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'
        return (
            <tr>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    {id}
                </td>
                <td style={{ textAlign: "center" , verticalAlign: "middle"}}>
                    <strong><p style={{textTransform:"capitalize"}}>{this.props.pokemon.name}</p></strong>
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <img src={id<=10090?imgURL:missingno} alt={id} />
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle"}}>
                    <Link to={`/pokemoninfo/${id}`} className="btn btn-primary">Informações</Link>
                    <button className="btn btn-danger" style={{marginLeft:20}} onClick={()=>this.capturar(id,this.props.pokemon.name)}>Capturar</button>
                </td>
            </tr>
        )
    }
}