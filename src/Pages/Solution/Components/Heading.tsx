import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Heading = () => {
  return (
    <Container fluid className='text-center bg-creamwhite first_card header'>
        <Row>
            <Col className='text-center'>
              <h5 className='text-green header'>OUR SOLUTION</h5>
              <h6 className='mt-1 mb-3 h2 px-lg-4 px-0 mx-lg-5 mx-0'>Lorem ipsum dolor sit amet consectetur. Gravida habitasse rhoncus tempus tellus nec.</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Heading