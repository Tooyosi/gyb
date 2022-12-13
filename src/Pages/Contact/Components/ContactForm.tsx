import React from 'react';
import Formik from 'components/Forms/Formik'
import SimpleFormik from 'components/Forms/SimpleFormik.jsx';
import ContactInfo from './ContactInfo';
import { Container, Row, Col } from 'reactstrap';


const ContactForm = () => {
  return (
    <Container >
        <Row className='justify-content-center'>
            <Col md="5" sm="12">
                <SimpleFormik />
            </Col>
            <Col md="5" sm="12">
                <ContactInfo />
            </Col>
        </Row>
    </Container>
  )
}

export default ContactForm