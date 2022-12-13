import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Heading = () => {
  return (
    <Container fluid className='text-center first_card py-4 header px-6'>
        <Row>
            <Col>
              <h5 className='text-green header'>CONTACT US</h5>
              <h6 className='header'>Send us your Inquiry, we look forward to hearing from you</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Heading