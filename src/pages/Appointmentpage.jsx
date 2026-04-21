import React from 'react'
import "./AppointmentPage.css"
import male1 from "../assets/male1.png"
import NavComponent from '../components/NavComponent'
import Navappointment from '../components/Navapointment'


const Appointmentpage = () => {
  return (
    <div className='appointment-page'>
      <div>
        <h1 className='appointment-title'>My Appointments</h1>
      </div>
      <div className='appointment-container'>
      <div className='appointment-details'>
        <div className='overall-div'>
          <div className='img'>
            <img src={male1} alt='appointment' />
          </div>

          <div>
            <h3 className='name'>Dr. Richard James</h3>
            <p className='specialty'>General physician</p>
            <p className='address'>Address:</p>
            <p className='address-details'>57th Cross, Richmond<br></br>
              Circle, Church Road, London</p>
            <p className='date-time'>Date & Time: 25, July, 2024 |  8:30 PM</p>
          </div>
        </div>
        <div className='cancel-button-div'>
        <button className='cancel-button'>Cancel Appointment</button>
        </div> 
      </div>
      </div>

       <div className='appointment-container'>
      <div className='appointment-details'>
        <div className='overall-div'>
          <div className='img'>
            <img src={male1} alt='appointment' />
          </div>

          <div>
            <h3 className='name'>Dr. Richard James</h3>
            <p className='specialty'>General physician</p>
            <p className='address'>Address:</p>
            <p className='address-details'>57th Cross, Richmond<br></br>
              Circle, Church Road, London</p>
            <p className='date-time'>Date & Time: 25, July, 2024 |  8:30 PM</p>
          </div>
        </div>
        <div className='cancel-button-div2'>
        <button className='paid'>Pay here</button>
         <button className='cancel-button'>Cancel Appointment</button>
        </div> 
      </div>
      </div>

       <div className='appointment-container'>
      <div className='appointment-details'>
        <div className='overall-div'>
          <div className='img'>
            <img src={male1} alt='appointment' />
          </div>

          <div>
            <h3 className='name'>Dr. Richard James</h3>
            <p className='specialty'>General physician</p>
            <p className='address'>Address:</p>
            <p className='address-details'>57th Cross, Richmond<br></br>
              Circle, Church Road, London</p>
            <p className='date-time'>Date & Time: 25, July, 2024 |  8:30 PM</p>
          </div>
        </div>
        <div className='cancel-button-div2'>
        <button className='paid'>Paid</button>
        <button className='cancel-button'>Cancel Appointment</button>
        </div> 
      </div>
      </div>



    </div>
  )
}

export default Appointmentpage