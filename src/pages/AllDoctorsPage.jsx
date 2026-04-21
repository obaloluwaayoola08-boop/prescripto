import React, { useState } from 'react'
import "./AllDoctorsPage.css"
import NavComponent from '../components/NavComponent'
import AlldocComponent from '../components/AlldocComponent'
import FooterComponent from '../components/FooterComponent'

const AllDoctorsPage = (props) => {
  const [doctors, setDoctors] = useState(props.doctorsdata);

  const filterFunction = (value) => {
    
   
    const filteredData = props.doctorsdata.filter((doctor)=>doctor.speciality === value);
    setDoctors(filteredData);
  }
 
  return (
    <div>
      <h3 className='all-docs-title'>Browse through the doctors specialist.</h3>
      <div className='all-docs'>
        <div className='alldoc-button'>
          <button  onClick={
            ()=>{
              setDoctors(props.doctorsdata);
            }
          } className="button-outline">All</button>
          <button className='button-outline' onClick={
            ()=>{
              filterFunction("General Physician")
            }
          }>General Physician</button>
          <button  
             onClick={
            ()=>{
              filterFunction("Gynaecologist")
            }
          }
          className='button-outline'>Gynaecologist</button>
          <button 
          
               onClick={
            ()=>{
              filterFunction("Dermatologist")
            }
          }
          className='button-outline'>Dermatologist</button>
          <button 
              onClick={
            ()=>{
              filterFunction("Pediatrician");
            }
          }
          className='button-outline'>Pediatrician</button>
          <button 
             onClick={
            ()=>{
              filterFunction("Neurologist")
            }
          }
          className='button-outline'>Neurologist</button>
          <button  
               onClick={
            ()=>{
              filterFunction("Gastroenterologist")
            }
          }
          className='button-outline'>Gastroenterologist</button>
        </div>
        <div>
          <AlldocComponent doctors= {doctors}/>
        </div>


      </div>




      <FooterComponent />
    </div>
  )
}

export default AllDoctorsPage