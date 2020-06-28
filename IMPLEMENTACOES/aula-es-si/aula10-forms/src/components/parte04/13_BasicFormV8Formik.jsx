import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props}
                className={meta.touched ? (meta.error ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
            />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <div className="form-group">
            <div className="custom-control">
                <input type="checkbox" {...field} {...props}
                    className={meta.touched ? (meta.error ? 'custom-control-input is-invalid' : 'custom-control-input is-valid') : 'custom-control-input'}
                />
                <label className="custom-control-label" htmlFor={props.id || props.name}>
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">{meta.error}</div>
                ) : null}
            </div>
        </div>
    );
};

const MyRadio = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'radio' });
    return (
        <div className="form-check">
            <input type="radio" {...field} {...props}
                className="form-check-input"
            />
            <label className="form-check-label" htmlFor={props.id}>
                {children}
            </label>
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}
                className={meta.touched ? (meta.error ? 'custom-select is-invalid' : 'custom-select is-valid') : 'custom-select'}
            />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}
                className={meta.touched ? (meta.error ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
            />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default () => {
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    read: false,
                    job: '',
                    lang: 'java',
                    bigText: ''
                }
            }
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                read: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
                job: Yup.string()
                    .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                    )
                    .required('Required'),
                bigText: Yup.string()
                    .max(100, 'Must be 100 characters or less')
                    .required('Required'),
                lang: Yup.string()
                    .required('Required')
            })}
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            console.log(values.read)
                            console.log(values.job)
                            console.log(values.lang)
                            console.log(values.bigText)
                            setSubmitting(false)
                        },
                        200
                    )
                }
            }
        >
            {
                (props) => (
                    <div>
                        <h1>Formulário Básico 13</h1>
                        <Form>
                            <div>
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    placeholder="Jane"
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label="Last Name"
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="jane@formik.com"
                                />
                            </div>
                            <div>
                                <MySelect label="Job Type" name="job" id="job">
                                    <option value="">Select a job type</option>
                                    <option value="designer">Designer</option>
                                    <option value="development">Developer</option>
                                    <option value="product">Product Manager</option>
                                    <option value="other">Other</option>
                                </MySelect>
                            </div>
                            <div className="form-group">
                                Prefered programming language:
                                <MyRadio name="lang" id="java" value="java">
                                    Java
                                </MyRadio>
                                <MyRadio name="lang" id="cplusplus" value="cplusplus">
                                    C++
                                </MyRadio>
                                <MyRadio name="lang" id="python" value="python">
                                    Python
                                </MyRadio>
                            </div>
                            <div>
                                <MyTextArea
                                    label="Comments"
                                    id="bigText"
                                    name="bigText"
                                    rows="10"
                                    cols="50"
                                    placeholder="Comment here..." />
                            </div>
                            <div>
                                <MyCheckbox name="read" id="read">
                                    I accept the terms and conditions
                        </MyCheckbox>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" disabled={props.isSubmitting ? true : false}>Submit</button>
                            </div>
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}