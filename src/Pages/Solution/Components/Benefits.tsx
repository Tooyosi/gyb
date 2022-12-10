import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Benefits = () => {
  return (
    <Container className='py-5'>
        <Row className='header text-center px-6'>
            <Col>
                <h5 className='text-green'>BENEFITS</h5>
                <h6>Lorem ipsum dolor sit amet consectetur. Gravida habitasse rhoncus tempus tellus nec.</h6>
            </Col>
        </Row>
        <Row className='justify-content-center pt-3'>
            <Col md="3" sm="12" className='text-center'>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
            </Col>
            <Col md="3" sm="12" className='text-center'>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
                <p>
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Checkmark.svg`).default}
                    /> &nbsp;
                    Lorem ipsum dolor sit amet
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default Benefits