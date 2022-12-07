import React from 'react'
import Logo from 'components/Logo/Logo'
import { socials } from '../../utils/socials'
import { Container } from 'reactstrap';

const Footer = () => {

    const { facebook, twitter, instagram, linkedin } = socials;

  return (
    <Container fluid  className='footer' >
        <div className="footer_row">
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

        </div>
    </Container>
  )
}

export default Footer