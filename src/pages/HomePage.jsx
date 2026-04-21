import React from 'react'
import NavComponent from '../components/NavComponent'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'
import FindBySpeciality from '../components/FindBySpeciality'
import TopDoctors from '../components/TopDoctors'
import FooterComponent from '../components/FooterComponent'
import AppointmentComponent from '../components/AppointmentComponent'


const HomePage = (props) => {
  return (
      <div className='home-page'>
          
          <HeroComponent /> 
          <FindBySpeciality />
      <TopDoctors doctorsData = {props.doctorsData} />
      <AppointmentComponent/>
      <FooterComponent/>
    </div>
  )
}

export default HomePage