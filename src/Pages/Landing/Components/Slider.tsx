import React from 'react'
import Slider from "react-slick";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

var settings = {
    draggable: true,
    dots: true,
    autoplay: true, /* this is the new line */
    autoplaySpeed: 20000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // className: 'slick-slider-fade'
};
const dataToMap = [
    {
        header: "Technology",
        text: `Lorem ipsum dolor sit amet consectetur. Proin sed convallis sit sit nec fames. Interdum sed nibh sagittis ornare neque ullamcorper ac donec sed. Tempus in ac at at turpis curabitur. Enim mi massa aliquam at eget sit egestas. Vitae adipiscing habitasse nec donec. 
        Non pellentesque lacus a sagittis bibendum. Imperdiet sed dolor odio rhoncus lorem rutrum. Tincidunt a ultrices condimentum ultrices dictum placerat.
        Nunc gravida adipiscing viverra at at vitae semper elementum vestibulum. Maecenas amet sed lacinia lorem rutrum sagittis libero elementum massa. Porttitor velit .`
    }, {
        header: "Services",
        text: `Lorem ipsum dolor sit amet consectetur. Proin sed convallis sit sit nec fames. Interdum sed nibh sagittis ornare neque ullamcorper ac donec sed. Tempus in ac at at turpis curabitur. Enim mi massa aliquam at eget sit egestas. Vitae adipiscing habitasse nec donec. 
        Non pellentesque lacus a sagittis bibendum. Imperdiet sed dolor odio rhoncus lorem rutrum. Tincidunt a ultrices condimentum ultrices dictum placerat.
        Nunc gravida adipiscing viverra at at vitae semper elementum vestibulum. Maecenas amet sed lacinia lorem rutrum sagittis libero elementum massa. Porttitor velit .`
    }
];

const SliderComponent = () => {
    return (
        <div>
            <Row>
                <Col md="10" className='mx-auto'>
                    <Card className='border-0'>
                        <CardBody>

                            <Slider  {...settings}>
                                {dataToMap.map((data, i) => (
                                    <div key={i}>
                                        <Container>
                                            <Row>
                                                <Col md="6">
                                                    <h3>{data.header}</h3>
                                                    <p>{data.text}</p>
                                                </Col>
                                                <Col md="6">
                                                    <img src={require(`../Assets/Images/${data.header}.svg`)} alt={data.header} className="img-fluid" />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                ))}
                            </Slider>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default SliderComponent