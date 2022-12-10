import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from 'components/Button/Button'

const Growth = () => {
  return (
    <Container fluid className='growth_rectangle text-white'>
        <Row>
            <Col md='6'>
                &nbsp;
            </Col>
            <Col md='6 header'>
                <h5 className='py-1'>BUSINESS GROWTH</h5>
                <h6 className='py-1'>Lorem ipsum dolor sit amet consectetur. Varius dolor praesent.</h6>
                <p className='py-1'>Lorem ipsum dolor sit amet consectetur. Quam aenean urna viverra praesent fames. Nulla tellus in feugiat egestas. In varius velit elit lacus ultricies a at tortor arcu. Lacus ipsum vehicula dolor sed viverra mauris donec feugiat.</p>
                <a href="www.google.com">
                  <Button className='bg-transparent border border-white px-4 py-1' text='Get Started' />
                </a>
            </Col>
        </Row>

    </Container>
  )
}

export default Growth