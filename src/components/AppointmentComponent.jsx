import React from 'react'


import "./AppointmentComponent.css"
import appointmentdoc from "../assets/appointmentdoc.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const AppointmentComponent = () => {
    
   

  return (
      <section className="appointment">
          
          <div className='appointment-left' data-aos="fade-right" data-aos-delay="500">
              <h1>
                  Book Appointment <br />
                  With 100+ Trusted Doctors
              </h1>

              <button className='button-white'>
                  <Link to="/signup">Create account</Link>


              </button> 
              
          </div>

          <div className='appointment-right' data-aos="fade-left" data-aos-delay="500">
              <img src={appointmentdoc} alt='hero-image'/>
              
          </div>
          
    </section>
  )
}

export default AppointmentComponent