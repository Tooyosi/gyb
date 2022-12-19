import { ifError } from 'assert';
import React, { useState } from 'react'
import {
    Carousel,
    CarouselCaption,
    CarouselIndicators,
    CarouselItem,
    UncontrolledCarousel
} from 'reactstrap';
import Button from 'components/Button/Button';
import { Container, Row, Col } from 'reactstrap';


const items = [
    {
        src: './images/Carousel_Slide1.svg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        id: 'custom-tag slide_1'
    },
    {
        src: './images/Carousel_Slide2.svg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        id: 'custom_tag slide_2'

    },
    {
        src: './images/Carousel_Slide3.svg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        id: 'custom_tag slide_3'
    }
];

const slides = items.map((item, i) => {
    return (
        <CarouselItem
            className={item.id}
            tag="div"
            id={item.id}
            key={i}
        >
            {/* <img src={item.src} className="w-100 img-fluid" alt="" /> */}
            <Container>
                <Row>
                    <Col className='md-6 my-5 pt-4'>
                        <h1 className='text-white py-1'>Lorem ipsum dolor sit amet consectetur. In sed.</h1>
                        <p className='text-white py-1'>Lorem ipsum dolor sit amet consectetur. Eleifend placerat. Lorem ipsum dolor sit amet consectetur. Eleifend placerat.</p>
                        <Button className='bg-green px-4 py-1' text='Learn More'/>
                    </Col>
                    <Col className='md-6'>
                        &nbsp;
                    </Col>
                </Row>
            </Container>

            {/* <CarouselCaption src={item.src} captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
    );
});
const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const onNext = () => {
        setActiveIndex((prev) => {
            if (prev === items.length - 1) {
                return 0
            }
            return prev + 1
        })
    }

    const onPrev = () => {
        setActiveIndex((prev) => {
            if (prev === 0) {
                return items.length
            }
            return prev - 1
        })
    }

    const goToIndex = (param:number)=> {
        setActiveIndex(param)
    }
    return (
        <Carousel activeIndex={activeIndex} previous={onPrev} next={onNext} fade={true}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="my-4 mx-5" />

            {slides}
        </Carousel>
    )
}

export default CarouselComponent