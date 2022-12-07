import React from 'react'
import Logo from 'components/Logo/Logo'
import { socials } from '../../utils/socials'
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {

    const { facebook, twitter, instagram, linkedin } = socials;

    return (
        <Container fluid className='footer pt-5 mt-5' >
            <Row>
                <Col md="3" sm="6">
                    <Logo />
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                    <div className="footer_row">
                        <a href={facebook}>
                            <img loading='lazy' alt="who we are" className='left img-fluid'
                                src={require(`assets/images/svgs/LinkedIn.svg`).default}
                            />
                        </a>
                    </div>
                </Col>
                <Col md="3" sm="6">
                    <h5>Quick Links</h5>

                </Col>
                <Col md="3" sm="6">
                    <h5>Our Solutions</h5>

                </Col>
                <Col md="3" sm="6">
                    <h5>Contact Information</h5>

                </Col>
            </Row>
            {/* <div className="footer_row">
                <div className="footer_col">
                    <Logo />
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                    <div className="footer_row">
                        <a href={facebook}>
                            <img loading='lazy' alt="who we are" className='left img-fluid'
                                src={require(`assets/images/svgs/LinkedIn.svg`).default}
                            />
                        </a>
                    </div>
                </div>

            </div> */}
        </Container>
    )
}

export default Footer