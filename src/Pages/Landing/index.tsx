import React from 'react'
import HomeAbout from 'Pages/Landing/Components/HomeAbout'
import Services from './Components/Services'
import SliderComponent from './Components/Slider'
import CarouselComponent from './Components/CarouselComponent'
import CarouselWithButton from './Components/CarouselWithButton'

const Landing = () => {
  return (
    <div id="landing">
      <CarouselComponent />
      {/* <CarouselWithButton /> */}
      <HomeAbout />
      <div className='bg-creamwhite'>
        <Services />
        <SliderComponent />
      </div>
    </div>
  )
}

export default Landing