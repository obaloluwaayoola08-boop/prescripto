import React from 'react'
import "./AllDoctorsPage.css"
import NavComponent from '../components/NavComponent'
import AlldocComponent from '../components/AlldocComponent'
import FooterComponent from '../components/FoooterComponent'

const AllDoctorsPage = () => {
  return (
    <div>
      <NavComponent />


      <h3 className='all-docs-title'>Browse through the doctors specialist.</h3>
      <div className='all-docs'>
        <div className='alldoc-button'>
          <button className='button-outline'>General Physician</button>
          <button className='button-solid'>Gynaecologist</button>
          <button className='button-outline'>Dermatologist</button>
          <button className='button-outline'>Pediatrician</button>
          <button className='button-outline'>Neurologist</button>
          <button className='button-outline'>Gastroenterologist</button>
        </div>
        <div>
          <AlldocComponent />
        </div>


      </div>




      <FooterComponent />
    </div>
  )
}

export default AllDoctorsPage