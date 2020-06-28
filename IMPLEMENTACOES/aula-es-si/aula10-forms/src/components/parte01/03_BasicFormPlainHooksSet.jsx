import React, { useState } from 'react'

export default () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = event => {
        switch(event.target.name){
            case 'firstName':
                setFirstName(event.target.value)
                break
            case 'lastName':
                setLastName(event.target.value)
                break
            case 'email':
                setEmail(event.target.value)
                break
            default:
                console.log('erro')
        }
    }//handleChange

    const handleSubmit = (event) => {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        event.preventDefault()
    }

    return (
        <div>
            <h1>Formulário Básico 03</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                        value={firstName}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        value={lastName}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={email}
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