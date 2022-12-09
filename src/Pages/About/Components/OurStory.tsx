import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const OurStory = () => {
  return (
    <Container fluid>
            <Row className='mx-5 mt-5 py-3 justify-content-md-center'>
                <Col md="7"  sm="12" className='mr-3 text-start'>
                    <h6 className="small-header green_header">OUR STORY</h6>
                    <h4 className='main-header'>Lorem ipsum dolor sit amet consectetur. Duis vestibulum faucibus porta facilisis faucibus.</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Urna sagittis mattis venenatis augue. Elementum augue in massa hendrerit enim non. Blandit sit ac adipiscing ultricies ut viverra nunc rutrum. Tincidunt nullam viverra ultricies interdum lectus lectus. Ultricies consectetur et magna urna aliquet sed.
                    </p>
                    <p>
                    Condimentum leo maecenas et sit odio imperdiet blandit. Amet duis ante id morbi. Odio faucibus vel nec enim lorem aliquam sed. Sed proin.
                    </p>
                </Col>
                <Col>
                    <Row className='align-items-center'>
                        <Col>
                            <img loading='lazy' alt="Our Story" className='img-fluid'
                                src={require(`../Assets/Images/Card2_Image1.svg`).default}
                            />
                        </Col>
                        <Col>
                            <img loading='lazy' alt="Our Story" className='img-fluid'
                                src={require(`../Assets/Images/Card2_Image2.svg`).default}
                            />
                             <img loading='lazy' alt="Our Story" className='img-fluid mt-3 mb-0'
                                src={require(`../Assets/Images/Card2_Image3.svg`).default}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
  )
}

export default OurStory