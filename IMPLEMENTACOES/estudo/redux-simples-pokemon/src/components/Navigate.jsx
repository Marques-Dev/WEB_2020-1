import './Navigate.css'
import React, { Component } from 'react'

import Card from './Card'

export default class Navigate extends Component {

    constructor(props) {
        super(props)
        this.state = { id: 1 }
    }

    proximo() {
        const id = (this.state.id + 1 > 100) ? this.state.id : this.state.id + 1
        this.setState({ id })
        this.props.setId(id)
    }

    anterior() {
        var id = (this.state.id - 1 < 1) ? this.state.id : this.state.id - 1
        this.setState({ id })
        this.props.setId(id)
    }

    soma10(){
        const id = (this.state.id + 10 > 100) ? 100 : this.state.id + 10
        this.setState({ id })
        this.props.setId(id)
    }

    subtrai10() {
        var id = (this.state.id - 10 < 1) ? 1 : this.state.id - 10
        this.setState({ id })
        this.props.setId(id)
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