import React from 'react'
import HomeAbout from 'Pages/Landing/Components/HomeAbout'
import Services from './Components/Services'
import SliderComponent from './Components/Slider'

const Landing = () => {
  return (
    <div id="landing">
      <HomeAbout />
      <div className='bg-creamwhite'>
        <Services />
        <SliderComponent />
      </div>
    </div>
  )
}

export default Landing