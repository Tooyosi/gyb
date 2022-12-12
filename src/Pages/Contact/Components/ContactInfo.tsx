import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Socials from 'components/Socials/Socials'

const ContactInfo = () => {

  return (
    <Container>
        <Row>
            <Col>
                <p>We are always available to respond when you send us a mail!</p>
                <h5>FOLLOW US</h5>
                <Socials />
                <h5>CONTACT INFORMATION</h5>
                <p>
                        <img loading='lazy' alt="Telephone number" className='left img-fluid'
                            src={require(`assets/images/svgs/Telephone.svg`).default}
                        /> &nbsp;
                        0091 333 444 555
                    </p>
                    <p>
                    <img loading='lazy' alt="email" className='left img-fluid'
                            src={require(`assets/images/svgs/Message.svg`).default}
                        /> &nbsp;
                        info@gyb.com
                    </p>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactInfo