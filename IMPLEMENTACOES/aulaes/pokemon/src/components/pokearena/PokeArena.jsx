import React, { Component } from 'react'
import background from '../../img/battlegrass.png'

import PokemonTableRow from './PokemonTableRow'

export default class PokeArena extends Component {

    constructor(props) {
        super(props)
        let equipeRocket = [{ id: 24, nome: 'arbok', life: 100 },
        { id: 52, nome: 'meowth', life: 100 },
        { id: 71, nome: 'victreebel', life: 100 },
        { id: 108, nome: 'lickitung', life: 100 },
        { id: 110, nome: 'weezing', life: 100 },
        { id: 112, nome: 'rhydon', life: 100 }]
        this.state = { pokeball: [], desafiantes: equipeRocket, escolhido: 3, desafiante: 5 }
        this.mudarEscolhido = this.mudarEscolhido.bind(this)

    }

    componentDidMount() {
        const pokeball = JSON.parse(sessionStorage.getItem('pokeball'))
        if (pokeball) {
            this.setState({ pokeball: pokeball })
        }
    }

    renderizarPokeball() {
        return this.state.pokeball.map(
            (pokemon, i) => {
                return <PokemonTableRow id={pokemon.id} key={i} nome={pokemon.nome} 
                                        life={pokemon.life} mudarEscolhido={this.mudarEscolhido}
                                        index={i}/>
            }
        )
    }

    renderizarArena() {
        if (!this.state.pokeball || this.state.pokeball.length === 0) return

        let escolhido = this.state.pokeball[this.state.escolhido]
        let desafiante = this.state.desafiantes[this.state.desafiante]

        const imgURLDesafiante =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + desafiante.id + '.png'

        const imgURLEscolhido =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + escolhido.id + '.png'

        return (
            <table style={{ width: '100%' }} background={background}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "right" }}>
                            <span style={{ textTransform: "capitalize" }}>
                                <b>{desafiante.nome} ({desafiante.life}/100)</b>
                            </span>
                            <img src={imgURLDesafiante} alt={desafiante.nome} />

                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: 4 }}>
                            <img src={imgURLEscolhido} alt={escolhido.nome} />
                            <span style={{ textTransform: "capitalize" }}>
                                <b>{escolhido.nome} ({escolhido.life}/100)</b>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center", backgroundColor:"white"}}>
                            <button className="btn btn-secondary">Atacar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )


    }

    renderizarDesafiantes() {
        return this.state.desafiantes.map(
            (pokemon, i) => {
                return <PokemonTableRow id={pokemon.id} key={i} nome={pokemon.nome} life={pokemon.life} />
            }
        )
    }

    mudarEscolhido(index){
        //console.log(index)
        this.setState({escolhido:index})
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

                <h3>Pokemon Arena</h3>
                <table className="table table-bordered" style={{ marginTop: 20, width: '71%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center" }}>Pokeball</th>
                            <th style={{ textAlign: "center" }}>Arena</th>
                            <th style={{ textAlign: "center" }}>Desafiantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '10%' }}>
                                <table>
                                    <tbody>
                                    {this.renderizarPokeball()}
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                {this.renderizarArena()}
                            </td>
                            <td style={{ width: '10%' }}>
                                <table>
                                    <tbody>
                                    {this.renderizarDesafiantes()}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}