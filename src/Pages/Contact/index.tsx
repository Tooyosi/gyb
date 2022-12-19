import React from 'react'
import Heading from 'Pages/Contact/Components/Heading'
import ContactForm from 'Pages/Contact/Components/ContactForm'
import MapComponent from 'components/GoogleMap/GoogleMap'
import { Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <div>
        <Heading />
        <ContactForm />
        <MapComponent />
        {/* <Row  className='text-center my-5'>
            <Col md='12'>
                <img loading='lazy' alt="Our Location" className='img-fluid'
                    src={require(`./Assets/Images/SanFrancisco.svg`).default}
                />
            </Col>
        </Row> */}
    </div>
  )
}

export default Contact