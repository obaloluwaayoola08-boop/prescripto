import React from 'react'
import "./AboutPage.css"
import NavComponent from '../components/NavComponent'
import FooterComponent from '../components/FoooterComponent'

const AboutPage = () => {
  return (
    <div className="about-page">
    
          <NavComponent/> 
  
    <div className='about-us'>
     <h3 className='about'>ABOUT</h3>
     <h3 className='us'>US</h3>
     </div>

      <div className='aboutt'>
        <div>
          <img src="/about_image.png" alt="" className='images' />
        </div>
        <div className='text'>
        <p className='para'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
        <p className='para1'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
        <h3 className='our-vision'>Our Vision</h3>
        <p className='para2'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
         </div>

           <div className='why-us'>
     <h4 className='about'>WHY</h4>
     <h4 className='us'>CHOOSE US</h4>
     </div>
<div className='overall-eff'>
     <div className='over-eff'>
      <h4 className='eff'>EFFICIENCY:</h4>
      <h5 className='eff-para'>Streamlined appointment scheduling</h5>
       <h5 className='eff-para1'>That fits into your busy lifestyle.</h5>
     </div>

      <div className='over-eff'>
      <h4 className='eff'>Convenience:</h4>
      <h5 className='eff-para'>Access to a network of trusted</h5>
       <h5 className='eff-para1'>Healthcare professionals in your area..</h5>
     </div>

      <div className='over-eff'>
      <h4 className='eff'>Personalization:</h4>
      <h5 className='eff-para'>Tailored recommendations and reminders</h5>
       <h5 className='eff-para1'> To help you stay on top of your health.</h5>
     </div>
 </div>
 <FooterComponent />
    
    
    </div>
  )
}

export default AboutPage