import React from 'react'


import "./HeroComponent.css"
import profilegroup from "../assets/profilegroups.png"
import heroimg from "../assets/heroimg.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from 'react';


const HeroComponent = () => {
    
   

  return (
      <section className="hero-section">
          
          <div className='hero-left' data-aos="fade-right" data-aos-delay="500">
              <h1>
                  Book Appointment With Trusted Doctors
              </h1>

              <div className='hero-details'>
                  <img src={profilegroup} alt=' profile-group'/>
                  
                  <p>
                      Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free 
                  </p>
                  
              </div>

              <button className='button-white'>
                  Book Appointment

                  <FaArrowRightLong />


              </button> 
              
          </div>

          <div className='hero-right' data-aos="fade-left" data-aos-delay="500">
              <img src={heroimg} alt='hero-image'/>
              
          </div>
          
    </section>
  )
}

export default HeroComponent