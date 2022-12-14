import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const ImageLeft = () => {
    return (
        <Container className="bg-creamwhite py-4">
            <Row className='align-items-center'>
                <Col md="6" sm="12">
                    <img loading='lazy' alt="Our Story" className='img-fluid'
                        src={require(`../Assets/Images/Picture.svg`).default}
                    />
                </Col>
                <Col className='header' md="6" sm="12">
                    <h5 className='text-green'>OUR STORY</h5>
                    <h6>Lorem ipsum dolor sit amet consectetur. Duis vestibulum faucibus porta facilisis faucibus.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur. Urna sagittis mattis venenatis augue. Elementum augue in massa hendrerit enim non. Blandit sit ac adipiscing ultricies ut viverra nunc rutrum. Tincidunt nullam viverra ultricies interdum lectus lectus. Ultricies consectetur et magna urna aliquet sed.</p>
                    <p>Condimentum leo maecenas et sit odio imperdiet blandit. Amet duis ante id morbi. Odio faucibus vel nec enim lorem aliquam sed. Sed proin.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ImageLeft