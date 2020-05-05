import React, { Component } from 'react'
import PokeballTableRow from './PokeballTableRow'
import { Link } from 'react-router-dom'


export default class Pokeball extends Component {

    constructor(props){
        super(props)
        this.state = {pokeball:[]}
    }

    componentDidMount() {
        const pokeball = JSON.parse(sessionStorage.getItem('pokeball'))
        if (pokeball) {
           this.setState({pokeball:pokeball})
        }
    }

    montarTabela() {
        if (!this.state.pokeball || this.state.pokeball.length===0) {
            return (
            <tr>
                <td colSpan='3' style={{textAlign:"center"}}> Pokebola vazia. </td>
            </tr>)
        }
        return this.state.pokeball.map(
            (pokemon, i) => {
                return <PokeballTableRow
                    nome={pokemon.nome}
                    id={pokemon.id}
                    key={i}
                />
            }
        )
    }

    render() {
        return (
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>

                <h3>Poké Ball</h3>
                <table className="table table-striped table-sm table-bordered" style={{ marginTop: 20, width: '50%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center", width: '20%' }}>ID</th>
                            <th style={{ textAlign: "center", width: '40%' }}>Nome</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='3' style={{ textAlign: "center"}}>
                                <Link to={'/pokedex'} className='btn btn-secondary' >Pokédex</Link>  
                            </td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        )
    }
}