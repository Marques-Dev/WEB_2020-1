import React, { Component } from 'react'

export default class BasicFormPlainClass extends Component {

    constructor(props) {
        super(props)
        this.state ={firstName: '', lastName: '', email: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Inicializador_Objeto#Nomes_de_propriedades_computados
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
    }

    render() {
        return (
            <div>
                <h1>Formulário Básico 02</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address: </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            className="form-control"
                        />
                        <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

