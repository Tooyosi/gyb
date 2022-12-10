import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const OurCoreValues = () => {
  return (
    <Container fluid className='bg-creamwhite py-5'>
            <Row className='mx-auto text-center'>
                <Col>
                    <h6 className="small-header green_header">OUR CORE VALUES</h6>
                    <h4 className='main-header mt-1 mb-1'>Lorem ipsum dolor sit amet consectetur.</h4>
                    <h4 className='main-header mt-1 mb-1'>Gravida habitasse rhoncus tempus tellus nec.</h4>
                </Col>
            </Row>


            <Row className='justify-content-center'>
                {/* Left column */}
                <Col className='justify-content-left mx-2' md="4">
                    <Row className='bg-white my-3 py-1'>
                        <Col md="2">
                            <img loading='lazy' alt="Data Security" className='img-fluid'
                                src={require(`../Assets/Images/Security.svg`).default}
                            />
                        </Col>
                        <Col md="10" className='p-0'>
                            <h5>Data Security</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>



                    <Row className='bg-white my-3 py-1'>
                        <Col md="2">
                            <img loading='lazy' alt="Data Security" className='img-fluid'
                                src={require(`../Assets/Images/QA.svg`).default}
                            />
                        </Col>
                        <Col md="10" className='p-0'>
                            <h5>Quality Assurance</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>
                </Col>


                {/* Right column */}
                <Col className='justify-content-left mx-2' md="4">
                    <Row className='bg-white my-3 py-1'>
                        <Col md="2">
                            <img loading='lazy' alt="Data Security" className='img-fluid'
                                src={require(`../Assets/Images/Growth.svg`).default}
                            />
                        </Col>
                        <Col md="10" className='p-0'>
                            <h5>Business Growth</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>


                    <Row className='bg-white my-3 py-1'>
                        <Col md="2">
                            <img loading='lazy' alt="Data Security" className='img-fluid'
                                src={require(`../Assets/Images/Insurance.svg`).default}
                            />
                        </Col>
                        <Col md="10" className='p-0'>
                            <h5>Insurance Secured</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu velit eu eleifend commodo ac et.</p>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>
  )
}

export default OurCoreValues