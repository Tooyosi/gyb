import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Heading = () => {
  return (
    <Container className='text-center first_card py-4 header'>
        <Row>
            <Col md="8" sm="12" className='mx-auto'>
              <h5 className='text-green header'>CONTACT US</h5>
              <h6 className='header'>Send us your Inquiry, we look forward to hearing from you</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Heading