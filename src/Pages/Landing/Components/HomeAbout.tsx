import Button from 'components/Button/Button'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'


const HomeAbout = () => {
  return (
    <Container fluid className='home_about'>
      <Row>
        <Col md="6">
          <img loading='lazy' alt="who we are" className='img-fluid'
            src={require(`assets/images/svgs/Home_About.svg`).default}
          />
        </Col>
        <Col md="6">
          <div className="text_col">
            <h3 className='small-header'>WHO WE ARE</h3>
            <h2 className='main-header'>Lorem ipsum dolor sit amet consectetur. Duis vestibulum faucibus porta facilisis faucibus.</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Urna sagittis mattis venenatis augue. Elementum augue in massa hendrerit enim non. Blandit sit ac adipiscing ultricies ut viverra nunc rutrum. Tincidunt nullam viverra ultricies interdum lectus lectus. Ultricies consectetur et magna urna aliquet sed. </p>
            <p>Condimentum leo maecenas et sit odio imperdiet blandit. Amet duis ante id morbi. Odio faucibus vel nec enim lorem aliquam sed. Sed proin.</p>
            <Button color="green" size="sm" className="px-5 py-2" text="Learn More" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeAbout