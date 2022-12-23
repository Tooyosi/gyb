import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const OurValue = () => {
    return (
        <Container fluid className="my-5 px-md-5 px-1">
            <Row className='justify-content-center'>
                <Col md="6" sm="12" className='text-center'>
                    <img loading='lazy' alt="Our Value" className='img-fluid'
                        src={require(`../Assets/Images/Value.svg`).default}
                    />
                </Col>
                <Col className='header mt-2 mt-md-0' md="6" sm="12">
                    <h5 className='text-green'>OUR VALUE</h5>
                    <h6 className='h2'>Lorem ipsum dolor sit amet consectetur. Quam mauris tellus.</h6>

                    <Row className='bg-white my-3 py-1'>
                        <Col md="2" xs="2">
                            <img loading='lazy' alt="Data Security" className='img-fluid'
                                src={require(`../Assets/Images/Security.svg`).default}
                            />
                        </Col>
                        <Col md="10" xs="10" className='p-0'>
                            <h5>Data Security</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>

                    <Row className='bg-white my-3 py-1'>
                        <Col md="2" xs="2">
                            <img loading='lazy' alt="Business Growth" className='img-fluid'
                                src={require(`../Assets/Images/Growth.svg`).default}
                            />
                        </Col>
                        <Col md="10" xs="10" className='p-0'>
                            <h5>Business Growth</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>

                    <Row className='bg-white my-3 py-1'>
                        <Col md="2" xs="2">
                            <img loading='lazy' alt="Quality Assurance" className='img-fluid'
                                src={require(`../Assets/Images/QA.svg`).default}
                            />
                        </Col>
                        <Col md="10" xs="10" className='p-0'>
                            <h5>Quality Assurance</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default OurValue