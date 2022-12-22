import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const WhoWeAre = () => {
  return (
    <Container fluid>
            <Row>
                <Col className='mx-auto text-center first_card bg-creamwhite'>
                    <h6 className="small-header green_header">WHO WE ARE</h6>
                    <h4 className='main-header mt-1 mb-3 h2 px-lg-6 px-0 mx-lg-5 mx-0 '>Lorem ipsum dolor sit amet consectetur. Gravida habitasse rhoncus tempus tellus nec.</h4>
                    <img loading='lazy' alt="Who We Are" className='img-fluid'
                        src={require(`../Assets/Images/TopImage.svg`).default}
                    />
                </Col>
            </Row>
        </Container>
  )
}

export default WhoWeAre