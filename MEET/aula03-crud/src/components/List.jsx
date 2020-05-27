import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)


class List extends Component {

    constructor(props) {
        super(props)
        this.state = { estudantes: [], loading: false }
    }

    componentDidMount() {
        this.setState({loading:true})
        this.ref = this.props.firebase.getFirestore().collection('estudantes')
        this.ref.onSnapshot(this.alimentarEstudantes.bind(this))
    }

    alimentarEstudantes(query) {
        let estudantes = []
        query.forEach(
            (doc) => {
                const { nome, curso, IRA } = doc.data()
                estudantes.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        IRA,
                    }
                )//push
            }//doc
        )//forEach

        this.setState({ estudantes: estudantes, loading: false })
    }

    montarTabela() {
        if (!this.state.estudantes) return
        return this.state.estudantes.map(
            (est, i) => {
                return <TableRow estudante={est}
                    key={i}
                    firebase={this.props.firebase}
                />
            }
        )
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        } else return this.montarTabela()
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Estudantes</h3>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerarConteudo()}
                    </tbody>

                </table>


            </div>
        )
    }
}

export default ListPage