import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class PokemonFront extends Component {
    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        return (
            <Card title='Frente' gray>
                <img src={url} alt={this.props.id} />
            </Card>
        )
    }
}

//mapeia o estado geral pra o props deste componente
function mapStateToProps(state) {
    return {
        id: state.pokemonId.id,
    }
}

const conexaoPokemonFront = connect(mapStateToProps)(PokemonFront)
export {conexaoPokemonFront}