import './Interval.css'
import React, { Component } from 'react'

import Card from './Card'

export default class Interval extends Component {

    constructor(props) {
        super(props)
        this.state = { min: 0, max: 0 }
    }

    setMin(min) {
        this.setState({ min })
        this.props.setMin(min)
    }

    setMax(max) {
        this.setState({ max })
        this.props.setMax(max)
    }

    render() {
        return (
            <Card title='Intervalo de Números' red>
                <div className='Intervalo'>
                    <span>
                        <strong>Mínimo:</strong>
                        <input
                            type='number'
                            value={this.state.min}
                            onChange={(e)=>this.setMin(e.target.value)} />
                    </span>
                    <span>
                        <strong>Máximo</strong>
                        <input 
                            type='number' 
                            value={this.state.max}
                            onChange={(e)=>this.setMax(e.target.value)} />
                    </span>
                </div>
            </Card>
        )
    }
}