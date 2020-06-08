import React, { Component } from 'react'

import Card from '../Card'

export default class Random extends Component {

    calcularRandom(min,max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    render() {
        const random = this.calcularRandom(this.props.min,this.props.max)
        return (
            <Card title='Sorteio dos Números' purple>
                <span>
                    <span>Resultado:</span>
                    <strong>{random}</strong>
                </span>
            </Card>
        )
    }
}