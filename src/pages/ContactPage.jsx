import React from 'react'
import "./ContactPage.css"
import { Link } from 'react-router-dom'

import FooterComponent from '../components/FooterComponent'

const ContactPage = () => {
  return (
    <div>
      

        <div className='contact-us'>
     <h3 className='about'>CONTACT</h3>
     <h3 className='us'>US</h3>
     </div>

    <div className='contactt'>
        <div>
          <img src="/contact_image.png" alt="" className='image' />
        </div>
        <div className='words'>
        <h3 className='our'>OUR OFFICE</h3>
        <p className='para'>54709 Williams Station</p>
        <p className='para1'>Suit 350, Washington, USA</p>
        <p className='para2'>Tel: (415) 555‑0132</p>
        <p className='para3'>Email: greatstackdev@gmail.com</p>
        <h3 className='pres'>CAREERS AT PRESCRIPTO</h3>
        <p className='para4'>Learn more about our teams and job openings.</p>
        <button className='button-outline'>Explore Jobs</button>

        
      
        </div>
         </div>
         <div>
          <FooterComponent/>
         </div>

    </div>
  )
}

export default ContactPage