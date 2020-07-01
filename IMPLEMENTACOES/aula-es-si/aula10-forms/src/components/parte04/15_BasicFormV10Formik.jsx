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

const MyRadio = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'radio' });
    return (
        <div className="form-check" style={{ marginRight: '10px' }}>
            <input type="radio" {...field} {...props}
                className="form-check-input"
            />
            <label className="form-check-label" htmlFor={props.id}>
                {children}
            </label>
        </div>
    );
};

const MyRadioGroup = (props) => {
    
    const [, meta] = useField('lang');
    
    const radiosJSX = props.radios.map(
        (radio, i) => {
            return (
                <td key={i}>
                    <MyRadio name={radio.name} id={radio.id} value={radio.value}>
                        {radio.label}
                    </MyRadio>
                </td>
            )
        }
    )
    return (
        <div className="form-group">
            {props.label}
            <table style={{ marginTop: '15px' }}>
                <tbody>
                    <tr>
                        {radiosJSX}
                    </tr>
                </tbody>
            </table>
            {meta.touched && meta.error ? (
                <div className="invalid-feedback d-block">{meta.error}</div>
            ) : null}
        </div>
    )
}

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
                    lang: '',
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
                job: Yup.string()
                    .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                    )
                    .required('Required'),
                lang: Yup.string()
                    .required('Required'),
                bigText: Yup.string()
                    .max(100, 'Must be 100 characters or less')
                    .required('Required'),
                read: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.')
            })}
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            console.log(values.job)
                            console.log(values.lang)
                            console.log(values.bigText)
                            console.log(values.read)
                            setSubmitting(false)
                        },
                        200
                    )
                }
            }
        >
            {
                (props) => (
                    <div className="card">
                        <div className="card-header">Formulário Básico 15</div>
                        <div className="card-body">
                            <Form>

                                <div className="form-row">
                                    <div className="col-md-6">
                                        <MyTextInput
                                            label="First Name"
                                            name="firstName"
                                            id="firstName"
                                            type="text"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <MyTextInput
                                            label="Last Name"
                                            name="lastName"
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-4">
                                        <MyTextInput
                                            label="Email Address"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="jane@formik.com"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <MySelect label="Job Type" name="job" id="job">
                                            <option value="">Select a job type</option>
                                            <option value="designer">Designer</option>
                                            <option value="development">Developer</option>
                                            <option value="product">Product Manager</option>
                                            <option value="other">Other</option>
                                        </MySelect>
                                    </div>
                                    <div className="col-md-4">
                                        <MyRadioGroup
                                            label='Prefered programming language'
                                            radios={[
                                                { name: 'lang', id: 'java', value: 'java', label: 'Java' },
                                                { name: 'lang', id: 'cpluscplus', value: 'cplusplus', label: 'C ++' },
                                                { name: 'lang', id: 'python', value: 'python', label: 'Python' }
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">

                                    <div className="col-md-12">
                                        <MyTextArea
                                            label="Comments"
                                            id="bigText"
                                            name="bigText"
                                            rows="10"
                                            cols="50"
                                            placeholder="Comment here..." />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-12">
                                        <MyCheckbox name="read" id="read">
                                            I accept the terms and conditions
                                        </MyCheckbox>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" type="submit" disabled={props.isSubmitting ? true : false}>Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                )
            }

        </Formik>
    )
}