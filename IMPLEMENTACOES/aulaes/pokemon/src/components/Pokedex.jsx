import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './PokedexTableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        //console.log('constructor')
        this.state = {
            pokemons: [],
            next: '',
            previous: '',
            count: 0,
            pagina: 0,
            offset: 20
        }
        
    }

    componentDidMount() {
        //console.log('componentDidMount')
        const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
        this.getPokemonData(url)
    }

    getPokemonData(url){
        
        axios.get(url)
            .then(
                (res) => {
                    this.setState({
                        count: res.data.count,
                        pokemons: res.data.results,
                        previous: res.data.previous,
                        next: res.data.next
                    })
                    /*console.log(url)
                    console.log(this.state.previous)
                    console.log(this.state.next)*/

                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    montarTabela() {
        if (!this.state.pokemons) return
        return this.state.pokemons.map(
            (pokemon, i) => {

                return <TableRow pokemon={pokemon}
                    key={i}
                    position={(this.state.pagina * this.state.offset) + (i + 1)}
                />
            }
        )
    }

    proximo(){
       //console.log('proximo')
       if(this.state.next){
           this.setState({pagina:this.state.pagina+1})
           this.getPokemonData(this.state.next)
       }
    }

    anterior(){
       //console.log('anterior')
       if(this.state.previous){
           this.setState({pagina:this.state.pagina-1})
           this.getPokemonData(this.state.previous)
       }
    }

    render() {
        return (
            <div style={{ marginTop: 10, 
                        display:'flex', 
                        alignItems:'center', 
                        justifyContent:'center', 
                        flexDirection:'column' }}>
                <h3>Pokédex</h3> ({this.state.count} Pokemons)
                <table className="table table-striped" style={{ marginTop: 20, width:'80%'}}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" ,width:'20%'}}>ID</th>
                            <th style={{ textAlign: "center", width:'20%'}}>Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4' style={{ textAlign: "center", verticalAlign: "middle" }}>
                                <button className="btn btn-secondary" 
                                        disabled={!this.state.previous}
                                        onClick={()=>this.anterior()}>
                                            Anterior
                                </button>
                                <button className="btn btn-secondary" 
                                        style={{ marginLeft: 20 }} 
                                        disabled={!this.state.next}
                                        onClick={()=>this.proximo()}>
                                            Próximo
                                </button>
                            </td>
                        </tr>
                    </tfoot>

                </table>


            </div>
        )
    }
}