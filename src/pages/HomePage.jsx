import React from 'react'
import NavComponent from '../components/NavComponent'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'
import FindBySpeciality from '../components/FindBySpeciality'
import TopDoctors from '../components/TopDoctors'


const HomePage = () => {
  return (
      <div className='home-page'>
          <NavComponent />  
          <HeroComponent /> 
          <FindBySpeciality />
          <TopDoctors/>
    </div>
  )
}

export default HomePage