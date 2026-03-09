import React from 'react'
import NavComponent from '../components/NavComponent'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'
import FindBySpeciality from '../components/FindBySpeciality'
import TopDoctors from '../components/TopDoctors'
import FooterComponent from '../components/FoooterComponent'  


const HomePage = () => {
  return (
      <div className='home-page'>
          <NavComponent />  
          <HeroComponent /> 
          <FindBySpeciality />
          <TopDoctors/>
          <FooterComponent />
    </div>
  )
}

export default HomePage