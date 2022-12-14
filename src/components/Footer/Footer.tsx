import React from 'react'
import Logo from 'components/Logo/Logo'
// import { socials } from '../../utils/socials'
import { Col, Container, Row } from 'reactstrap';
import Socials from 'components/Socials/Socials';
import LogoHeader from 'components/Logo/LogoHeader';

const Footer = () => {

    // const { facebook, twitter, instagram, linkedin } = socials;

    return (
        <>
            <Container className='footer pt-5' >
                <Row>
                    <Col md="3" sm="6" className="mb-3">
                        {/* <Logo /> */}
                        <LogoHeader />
                        <p id='footer-sub'>Lorem ipsum dolor sit amet consectetur. </p>
                        {/* <Row>
                        <Col md="auto">
                            <a href={linkedin}>
                                <img loading='lazy' alt="Our LinkendIn page" className='left img-fluid'
                                    src={require(`assets/images/svgs/LinkedIn.svg`).default}
                                />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a href={facebook}>
                                <img loading='lazy' alt="Our Facebook page" className='left img-fluid'
                                    src={require(`assets/images/svgs/Facebook.svg`).default}
                                />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a href={instagram}>
                                <img loading='lazy' alt="Our Instagram page" className='left img-fluid'
                                    src={require(`assets/images/svgs/Instagram.svg`).default}
                                />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a href={twitter}>
                                <img loading='lazy' alt="Our Twittwe page" className='left img-fluid'
                                    src={require(`assets/images/svgs/Twitter.svg`).default}
                                />
                            </a>
                        </Col>
                    </Row> */}
                        <Socials />
                    </Col>
                    <Col md="3" sm="6" className="mb-3">
                        <h5>Quick Links</h5>
                        <p>Who we are</p>
                        <p>Our Team</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col md="3" sm="6" className="mb-3">
                        <h5>Our Solutions</h5>
                        <p>Data Security</p>
                        <p>Business Growth</p>
                        <p>Quality Assurance</p>
                    </Col>
                    <Col md="3" sm="6" className="mb-3">
                        <h5>Contact Information</h5>
                        <p>
                            <img loading='lazy' alt="Address" className='left img-fluid'
                                src={require(`assets/images/svgs/Location.svg`).default}
                            /> &nbsp;
                            <strong>USA Office 1:</strong> 230 Houston Texas, Atlanta Georgia. USA.
                        </p>
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
            <div className='bg-creamwhite'>
                <Container>
                    <Row className='text-green py-2 mt-3'>
                        <Col sm="12" className='text-center'>
                            &copy; 2022 Grow your Business Global.
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer