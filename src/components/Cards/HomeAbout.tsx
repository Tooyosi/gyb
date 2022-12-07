import React from 'react'
import { Container } from 'reactstrap'
import Button from '../Button/Button'

const HomeAbout = () => {
  return (
    <Container fluid className='home_about'>
        <img loading='lazy' alt="who we are" className='left img-fluid'
        src={require(`assets/images/svgs/Home_About.svg`).default}
         />

        <div className="text_col">
            <h3>WHO WE ARE</h3>
            <h2>Lorem ipsum dolor sit amet consectetur. Duis vestibulum faucibus porta facilisis faucibus.</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Urna sagittis mattis venenatis augue. Elementum augue in massa hendrerit enim non. Blandit sit ac adipiscing ultricies ut viverra nunc rutrum. Tincidunt nullam viverra ultricies interdum lectus lectus. Ultricies consectetur et magna urna aliquet sed. </p>
  	        <p>Condimentum leo maecenas et sit odio imperdiet blandit. Amet duis ante id morbi. Odio faucibus vel nec enim lorem aliquam sed. Sed proin.</p>
            <Button text="Learn More" />
        </div>
    </Container>
  )
}

export default HomeAbout