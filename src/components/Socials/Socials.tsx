import React from 'react'
import { socials } from 'utils/socials'
import { Container, Row, Col } from 'reactstrap'

const Socials = () => {

    const { facebook, twitter, instagram, linkedin } = socials;

    return (
        <div className='d-flex align-items-center'>
            <div className='mr-3'>
                <a href={linkedin}>
                    <img loading='lazy' alt="Our LinkendIn page" className='left img-fluid'
                        src={require(`assets/images/svgs/LinkedIn.svg`).default}
                    />
                </a>
            </div>
            <div className='mr-3'>
                <a href={facebook}>
                    <img loading='lazy' alt="Our Facebook page" className='left img-fluid'
                        src={require(`assets/images/svgs/Facebook.svg`).default}
                    />
                </a>
            </div>
            <div className='mr-3'>
                <a href={instagram}>
                    <img loading='lazy' alt="Our Instagram page" className='left img-fluid'
                        src={require(`assets/images/svgs/Instagram.svg`).default}
                    />
                </a>
            </div>
            <div className='mr-3'>
                <a href={twitter}>
                    <img loading='lazy' alt="Our Twittwe page" className='left img-fluid'
                        src={require(`assets/images/svgs/Twitter.svg`).default}
                    />
                </a>
            </div>
        </div>
    )
}

export default Socials