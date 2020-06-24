import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default () => {
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    colors: '',
                    bigText: ''
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
                    bigText: Yup.string()
                        .max(100, 'Must be 100 characters or less')
                        .required('Required')
                })
            }
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            console.log(values.colors)
                            console.log(values.bigText)
                            setSubmitting(false)
                        },
                        200
                    )
                }
            }
        >
            <div>
                <h1>Formulário Básico 12</h1>
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <Field name="firstName" id="firstName" type="text" />
                        <div>
                            <ErrorMessage name="firstName" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <Field name="lastName" id="lastName" type="text" />
                        <div>
                            <ErrorMessage name="lastName" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <Field name="email" id="email" type="email" />
                        <div>
                            <ErrorMessage name="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="colors">Colors: </label>
                        <Field name="colors" id="colors" as="select">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="bigText">Comments: </label>
                        <Field name="bigText" id="bigText" as="textarea" rows="10" cols="50" />
                        <div>
                            <ErrorMessage name="bigText" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </div>

        </Formik>
    )
}