import './Navigate.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class Navigate extends Component {

    constructor(props) {
        super(props)
        this.state = { id: this.props.id }
    }

    proximo() {
        const id = (this.state.id + 1 > 500) ? this.state.id : this.state.id + 1
        this.setState({ id })
    }

    anterior() {
        var id = (this.state.id - 1 < 1) ? this.state.id : this.state.id - 1
        this.setState({ id })
    }

    soma10(){
        const id = (this.state.id + 10 > 500) ? 500 : this.state.id + 10
        this.setState({ id })
    }

    subtrai10() {
        var id = (this.state.id - 10 < 1) ? 1 : this.state.id - 10
        this.setState({ id })
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
                    <input value={this.state.id} readOnly />
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

export default connect(mapStateToProps)(Navigate)