import React from 'react'
import { useFormik } from 'formik'

export default () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            console.log(values.firstName)
            console.log(values.lastName)
            console.log(values.email)
        },
    });

    return (
        <div>
            <h1>Formulário Básico 06</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
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