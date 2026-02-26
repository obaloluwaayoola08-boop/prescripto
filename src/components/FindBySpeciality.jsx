import React from 'react'
import "./FindBySpeciality.css"
import generalphy from "../assets/generalphy.png"
import gynaecologist from "../assets/gynaec.png"
import dermatologist from "../assets/derma.png"
import pedia from "../assets/pedia.png"
import neuro from "../assets/neuro.png"
import gastro from "../assets/gastro.png"
import { useNavigate } from 'react-router-dom'

const FindBySpeciality = () => {
    const navigate = useNavigate();
  return (
      <section className= "find-by-speciality">
          <h2>
              Find By Speciality
          </h2>
          <p>
              Simply browse through our extensive list
              of trusted doctors,  schedule <br/> your
              appointment hassle-free.
          </p>


          <div className='speciality-container'>
              
              <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={generalphy} alt=""/>
                  </div>
                  <p>General Physician</p>
                
                  
              </div>

               <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={gynaecologist} alt=""/>
                  </div>
                  <p>Gynaecologist</p>
                
                  
              </div>

               <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={dermatologist} alt=""/>
                  </div>
                  <p>Dermatologist</p>
                
                  
              </div>


               <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={pedia} alt=""/>
                  </div>
                  <p>Pediatrician</p>
                
                  
              </div>

               <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={neuro} alt=""/>
                  </div>
                  <p>Neurologist</p>
                
                  
              </div>
              <div onClick={() => {
                  navigate('/all-doctors')
              }} className="picture-card">
                  <div className="picture-wrapper">
                        <img src={gastro} alt=""/>
                  </div>
                  <p>Gastroenterologist</p>
                
                  
              </div>
              
          </div>
    </section>
  )
}

export default FindBySpeciality