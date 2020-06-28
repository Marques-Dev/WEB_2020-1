import React from 'react'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export default () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            console.log(values.firstName)
            console.log(values.lastName)
            console.log(values.email)
        },
    });

    return (
        <div>
            <h1>Formulário Básico 07</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className={formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                    />
                    {formik.errors.firstName ? <div className="invalid-feedback">{formik.errors.firstName}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className={formik.errors.lastName ? 'form-control is-invalid' : 'form-control'}
                    />
                    {formik.errors.lastName ? <div className="invalid-feedback">{formik.errors.lastName}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                    />
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}