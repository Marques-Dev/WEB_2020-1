import React from 'react'
import { useFormik } from 'formik'

export default () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            alert(values.email)
        },
    });

    return (
        <div>
            <h1>Formulário Básico 05</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control"
                    />
                    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}