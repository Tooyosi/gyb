import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Heading = () => {
  return (
    <Container fluid className='text-center bg-creamwhite first_card py-4 header px-6'>
        <Row>
            <Col>
              <h5 className='text-green'>OUR SOLUTION</h5>
              <h6>Lorem ipsum dolor sit amet consectetur. Gravida habitasse rhoncus tempus tellus nec.</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Heading