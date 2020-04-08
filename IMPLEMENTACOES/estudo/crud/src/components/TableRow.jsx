import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                <td style={{textAlign:"center"}}>
                    <Link to={"/edit/"+this.props.estudante.id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{textAlign:"center"}}>
                    <button className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}