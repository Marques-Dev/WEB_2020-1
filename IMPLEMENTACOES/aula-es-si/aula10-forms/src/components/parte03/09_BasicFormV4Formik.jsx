import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            console.log(values.firstName)
            console.log(values.lastName)
            console.log(values.email)
        },
    });

    return (
        <div>
            <h1>Formulário Básico 09</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={formik.touched.firstName ? (formik.errors.firstName ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div className="invalid-feedback">{formik.errors.firstName}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        className={formik.touched.lastName ? (formik.errors.lastName ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div className="invalid-feedback">{formik.errors.lastName}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={formik.touched.email ? (formik.errors.email ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                    />
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}