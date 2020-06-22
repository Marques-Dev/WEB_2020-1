import React, { useState } from 'react'

export default () => {

    const [values, setValues] = useState({firstName:'',lastName:'',email:''});

    const handleChange = event => {
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value
            }
        )//setValues
    }//handleChange

    const handleSubmit = (event) => {
        console.log(values.firstName)
        console.log(values.lastName)
        console.log(values.email)
        event.preventDefault()
    }

    return (
        <div>
            <h1>Formulário Básico</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                        value={values.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        value={values.lastName}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}