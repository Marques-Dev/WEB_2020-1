import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <List firebase={firebase} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)

        //firebase
        this.unscribe = null
        this._isMounted = false

        this.state = { estudantes: [], loading: false }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })

        //firestore
        /*this.ref = this.props.firebase.getFirestore().collection('estudantes')
        this.unscribe = this.ref.onSnapshot(this.alimentarEstudantes.bind(this));*/
        FirebaseService.list(this.props.firebase.getFirestore(),
            (estudantes) => {
                this._isMounted && this.setState({ estudantes: estudantes, loading: false })
            })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    /*alimentarEstudantes(query) {
        let estudantes = []

        query.forEach((doc) => {
            const { nome, curso, IRA } = doc.data()
            estudantes.push({
                _id: doc.id,
                nome,
                curso,
                IRA
            })//push
        })//forEach
        this._isMounted && this.setState({ estudantes: estudantes, loading: false })
    }*/

    apagarElementoPorId(id) {
        let tempEstudantes = this.state.estudantes
        for (let i = 0; i < tempEstudantes.length; i++) {
            if (tempEstudantes[i]._id === id) {
                tempEstudantes.splice(i, 1)
            }
        }
        this._isMounted && this.setState({ estudantes: tempEstudantes })
    }

    montarTabela() {
        if (!this.state.estudantes) return
        if (this.state.loading) return this.loadingSpinner()
        return this.state.estudantes.map(
            (est, i) => {
                return <TableRow estudante={est}
                    key={i}
                    apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase} />
            }
        )
    }

    loadingSpinner() {
        return (
            <tr style={{ backgroundColor: '#fff' }}>
                <td colSpan='6'>
                    <div className="text-center">

                        <div className="spinner-border ml-auto"
                            role="status"
                            aria-hidden="true"
                            style={{ width: '3rem', height: '3rem' }}></div><br />
                        <strong>Loading...</strong>
                    </div>
                </td>
            </tr>
        )
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
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage