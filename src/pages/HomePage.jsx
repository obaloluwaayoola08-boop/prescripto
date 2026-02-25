import React from 'react'
import NavComponent from '../components/NavComponent'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'


const HomePage = () => {
  return (
      <div className='home-page'>
          <NavComponent />  
          <HeroComponent/> 
    </div>
  )
}

export default HomePage