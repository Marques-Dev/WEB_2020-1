import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class PokemonBack extends Component {

    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        return (
            <Card title='Costas' green>
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

export default connect(mapStateToProps)(PokemonBack)