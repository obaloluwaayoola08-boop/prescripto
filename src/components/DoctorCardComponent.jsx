import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';

const DoctorCardComponent = (props) => {
    const navigate = useNavigate();
  return (
     <div onClick={() => {
                    navigate(`/all-doctors/${props.doctor.id}`)
              }} key={props.doctor.id} className="doctor-card">
                <div className="picture-wrapper">
                  <img src={props.doctor.img} alt="Alice" />
                </div>
    
                    <div className="doctor-details">
                        {
                            props.doctor.status === "Available" ? (
                                <h5>
                    <GoDotFill />
    
                    <span>Available</span>
                  </h5> 
                            ) : (
                                     <h5 className="unavailable">
                    <GoDotFill />
    
                    <span>Not Available</span>
                  </h5>
                            )
                        }
                 
                  <h3>Dr. {props.doctor.name} </h3>
                        <p>{props.doctor.speciality}</p>
                </div>
              </div>
  )
}

export default DoctorCardComponent