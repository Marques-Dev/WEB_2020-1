import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.estudante.id}
                </td>
                <td>
                    {this.props.estudante.nome}
                </td>
                <td>
                    {this.props.estudante.curso}
                </td>
                <td>
                    {this.props.estudante.IRA}
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-primary">Editar</button>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}