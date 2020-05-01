import React, { Component } from 'react'

export default class PokemonMoveDetail extends Component {
    render() {
        return (
            <tr>
                <td style={{paddingLeft:20}}>
                    {this.props.move.name}
                </td>
                <td>
                    <a href={this.props.move.url} target='_blank' rel='noopener noreferrer'>
                        {this.props.move.url}
                    </a>
                </td>
            </tr>
        )
    }
}