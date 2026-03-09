import React from 'react'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'
import FindBySpeciality from '../components/FindBySpeciality'
import TopDoctors from '../components/TopDoctors'
import FooterComponent from '../components/FoooterComponent'
import AppointmentComponent from '../components/AppointmentComponent'
import NavComponent from '../components/NavComponent'

const HomePage = () => {
  return (
      <div className='home-page'>
        <NavComponent />
          <HeroComponent /> 
          <FindBySpeciality />
          <TopDoctors/>
          <AppointmentComponent/>
          <FooterComponent/>
    </div>
  )
}

export default HomePage