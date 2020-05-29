import React, { Component } from 'react'

import Card from '../Card'

export default class Average extends Component {
    render() {
        const media = (this.props.min+this.props.max)/2.0
        return (
            <Card title='Média dos Números' blue>
                <span>
                    <span>Resultado:</span>
                    <strong>{media}</strong>
                </span>
            </Card>
        )
    }
}