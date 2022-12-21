import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Heading = () => {
  return (
    <Container fluid className='text-center bg-creamwhite first_card py-4 px-5 header'>
        <Row>
            <Col md="8" sm="12" className='mx-auto text-center'>
              <h5 className='text-green header'>OUR SOLUTION</h5>
              <h6 className='header'>Lorem ipsum dolor sit amet consectetur. Gravida habitasse rhoncus tempus tellus nec.</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Heading