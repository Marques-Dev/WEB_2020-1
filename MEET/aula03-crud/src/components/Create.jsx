import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {contexto => <Create firebase={contexto}/> }
    </FirebaseContext.Consumer>
)

class Create extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setIRA(e) {
        this.setState({ IRA: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        
        this.props.firebase.getFirestore().collection('estudantes').add(
            {
                nome: this.state.nome,
                curso: this.state.curso,
                IRA: this.state.IRA
            }
        )
        .then(()=>console.log(`Estudante ${this.state.nome} inserido com sucesso.`))
        .catch(error=>console.log(error))

        this.setState({ nome: '', curso: '', IRA: '' })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar Estudante</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" 
                        value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" 
                        value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control" 
                        value={this.state.IRA} onChange={this.setIRA}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Criar Estudante" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}

export default CreatePage