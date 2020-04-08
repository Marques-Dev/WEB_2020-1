import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { estudantes: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/estudantes')
            .then(
                (res) => {
                    this.setState({ estudantes: res.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    montarTabela() {
        if(!this.state.estudantes) return
        return this.state.estudantes.map(
            (estudante, i) => {
                return <TableRow estudante={estudante} key={i} />;
            }
        )
    }

    render() {

        return (
            <div>
                <p>List Estudante</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan="2" style={{textAlign:"center"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}

