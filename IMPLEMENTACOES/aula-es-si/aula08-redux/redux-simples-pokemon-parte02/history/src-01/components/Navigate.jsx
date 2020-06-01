import './Navigate.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import  { alterarId } from '../store/actions/pokemonId'

class Navigate extends Component {

    constructor(props) {
        super(props)
        this.props.alterarPokemonId(311)
    }

    proximo() {
        //const id = (this.state.id + 1 > 500) ? this.state.id : this.state.id + 1
    }

    anterior() {
        //var id = (this.state.id - 1 < 1) ? this.state.id : this.state.id - 1
    }

    soma10(){
        //const id = (this.state.id + 10 > 500) ? 500 : this.state.id + 10
    }

    subtrai10() {
        //var id = (this.state.id - 10 < 1) ? 1 : this.state.id - 10
    }

    render() {
        return (
            <Card title='ID do Pokémon' blue>
                <div className='navigate'>
                    <button
                        className='btn btn-secondary'
                        onClick={() => this.subtrai10()}>
                        -10
                    </button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => this.anterior()}>
                        Anterior
                    </button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => this.proximo()}>
                        Próximo
                    </button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => this.soma10()}>
                        +10
                    </button>
                    <input value={this.props.id} readOnly />
                </div>
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

//mapeia o actioncreator para o props deste componente
//a função action creator já vai pro props do componente
//alterarPokemonId(dentro de Navigate.jsx) --> alterarId(dentro de PokemonId)
function mapActionCreatorToProps(dispatch){
    return {
        alterarPokemonId(novoId){
            const action = alterarId(novoId)
            dispatch(action)
        }
    }
}

//linkando as duas funções acima
export default connect(mapStateToProps,mapActionCreatorToProps)(Navigate)