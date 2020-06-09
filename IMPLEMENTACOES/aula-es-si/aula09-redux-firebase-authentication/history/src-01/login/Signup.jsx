import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../store/actions/authActionCreator'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { login: '', password: '' }

        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.props.signup(this.state.login, this.state.password, () => {
            console.log(this.props.authMsg)
        })

        this.setState({ login: '', password: '' })
    }

    renderMessage() {
        if (this.props.authMsg) {
            let alertType = this.props.authMsg.includes('Err') ? 'alert-danger' : 'alert-info'
            return (
                <div className={`alert ${alertType}`} role='alert'>
                    {this.props.authMsg}
                </div>
            )
        }
    }

    render() {
        return (
            <div className='content'>
                <div className='card'>
                    <div className="card-header">
                        Sign-Up
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Login: </label>
                                <input type="text" className="form-control"
                                    value={this.state.login} onChange={this.setLogin} />
                            </div>
                            <div className="form-group">
                                <label>Senha: </label>
                                <input type="password" className="form-control"
                                    value={this.state.password} onChange={this.setPassword} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Efetuar Login" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authMsg: state.authReducer.authMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signup(login, password, callback) {
            const action = signup(login, password, callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Signup);

