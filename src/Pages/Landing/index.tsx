import React from 'react'
import HomeAbout from 'Pages/Landing/Components/HomeAbout'
import Services from 'Pages/Landing/Components/Services'
import SliderComponent from 'Pages/Landing/Components/Slider'
import CarouselComponent from 'Pages/Landing/Components/CarouselComponent'
// import CarouselWithButton from './Components/CarouselWithButton'
import OurValue from 'Pages/Landing/Components/OurValue'

const Landing = () => {
  return (
    <div id="landing">
      <CarouselComponent />
      {/* <CarouselWithButton /> */}
      <HomeAbout />
      <div className='bg-creamwhite'>
        <Services />
        <SliderComponent />
        <OurValue />
      </div>
    </div>
  )
}

export default Landing