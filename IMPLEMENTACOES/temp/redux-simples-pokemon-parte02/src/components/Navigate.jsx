import './Navigate.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import  { alterarId } from '../store/actions/pokemonId'

class Navigate extends Component {

    proximo() {
        const novoId = (this.props.id + 1 > 500) ? this.props.id : this.props.id + 1
        this.props.alterarPokemonId(novoId)
        
    }

    anterior() {
        const novoId = (this.props.id - 1 < 1) ? this.props.id : this.props.id - 1
        this.props.alterarPokemonId(novoId)
    }

    soma10(){
        const novoId = (this.props.id + 10 > 500) ? 500 : this.props.id + 10
        this.props.alterarPokemonId(novoId)
    }

    subtrai10() {
        const novoId = (this.props.id - 10 < 1) ? 1 : this.props.id - 10
        this.props.alterarPokemonId(novoId)
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
function mapDispatchToProps(dispatch){
    return {
        alterarPokemonId(novoId){
            const action = alterarId(novoId)
            dispatch(action)
        }
    }
}

//linkando as duas funções acima
const conexaoNavigate = connect(mapStateToProps,mapDispatchToProps)(Navigate)
export {conexaoNavigate}