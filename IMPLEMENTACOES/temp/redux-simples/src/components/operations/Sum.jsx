import React, { Component } from 'react'

import Card from '../Card'

export default class Sum extends Component {
    render() {
        var soma = this.props.min + this.props.max

        return (
            <Card title='Soma dos Números' green>
                <span>
                    <span>Resultado:</span>
                    <strong>{soma}</strong>
                </span>
            </Card>
        )
    }
}