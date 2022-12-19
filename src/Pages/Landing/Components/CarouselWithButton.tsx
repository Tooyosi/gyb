import React from 'react'
import CarouselComponent from './CarouselComponent'
import Button  from 'components/Button/Button'

const CarouselWithButton = () => {
  return (
    <div className='carousel first_card box'>
        <CarouselComponent />
        <Button id='carousel-button' className='box'/>

    </div>
  )
}

export default CarouselWithButton