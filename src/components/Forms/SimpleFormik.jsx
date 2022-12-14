import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Input } from 'reactstrap'
import Button from 'components/Button/Button'

const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <div>
                <label htmlFor={props.id || props.name}>{label}</label>
            </div>

            <Input className="text-input bg-creamwhite form-field" {...field} {...props} invalid={meta.touched && meta.error}/>
            {meta.touched && meta.error ? (
                <small className="error text-danger">{meta.error}</small>
            ) : null}
        </>
    );
};

const MyMessageBox = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className='text-box bg-creamwhite'{...field} {...props}></textarea>
            {meta.touched && meta.error ? (
                <small className="error text-danger">{meta.error}</small>
            ) : null}
        </>
    );
};

const SimpleFormik = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                acceptedTerms: false, // added for our checkbox
                jobType: '', // added for our select
            }}
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
                phoneNumber: Yup.string()
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <Row className='my-2'>
                    <Col>
                        <MyTextInput
                            label="FIRST NAME"
                            name="firstName"
                            type="text"
                            placeholder="Your first name"
                        />
                    </Col>
                    <Col>
                        <MyTextInput
                            label="LAST NAME"
                            name="lastName"
                            type="text"
                            placeholder="Your last name"
                        />
                    </Col>
                </Row>

                <Row className='my-2'>
                    <Col>
                        <MyTextInput
                            label="EMAIL ADDRESS"
                            name="email"
                            type="email"
                            placeholder="Your email address"
                        />
                    </Col>
                    <Col>
                        <MyTextInput
                            label="PHONE NUMBER"
                            name="phoneNumber"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            placeholder="Your phone number"
                        />

                    </Col>
                </Row>

                <Row className='my-2'>
                    <Col>
                        <MyMessageBox
                            label="YOUR MESSAGE"
                            name="message"
                            rows="5"
                            placeholder="Tells us about your business"
                        />
                    </Col>
                </Row>


                <Button text="Send Message" className='bg-green text-white px-3'></Button>
                {/* <button type="submit">Send Message</button> */}
            </Form>
        </Formik>
    )
}

export default SimpleFormik