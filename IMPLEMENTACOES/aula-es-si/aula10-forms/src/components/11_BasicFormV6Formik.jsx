import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export default () => {
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                }
            }
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })
            }
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            setSubmitting(false)
                        },
                        2000
                    )
                }
            }
        >
            {
                formik => (
                    <div>
                        <h1>Formulário Básico 11</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="firstName">First Name: </label>
                                <input

                                    name="firstName"
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name: </label>
                                <input

                                    name="lastName"
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                            </div>
                            <div>
                                <label htmlFor="email">Email Address: </label>
                                <input

                                    name="email"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </Formik>
    )
}