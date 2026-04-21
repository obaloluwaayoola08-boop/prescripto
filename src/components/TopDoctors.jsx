import React from "react";

import { GoDotFill } from "react-icons/go";

import "./TopDoctors.css";
import { Link, useNavigate } from "react-router-dom";
import DoctorCardComponent from "./DoctorCardComponent";

const TopDoctors = (props) => {
    
  
  return (
    <section className="top-doctors">
      <h2>Top Doctors To Book</h2>
      <p>Simply browse through our extensive list of trusted doctors</p>

      <div className="doctors-container">
        {props.doctorsData.map((doctor) => (
          //   <div onClick={() => {
          //       navigate(`/all-doctors/${doctor.id}`)
          // }} key={doctor.id} className="doctor-card">
          //   <div className="picture-wrapper">
          //     <img src={doctor.img} alt="Alice" />
          //   </div>

          //       <div className="doctor-details">
          //           {
          //               doctor.status === "Available" ? (
          //                   <h5>
          //       <GoDotFill />

          //       <span>Available</span>
          //     </h5> 
          //               ) : (
          //                        <h5 className="unavailable">
          //       <GoDotFill />

          //       <span>Not Available</span>
          //     </h5>
          //               )
          //           }
             
          //     <h3>Dr. {doctor.name} </h3>
          //           <p>{doctor.speciality}</p>
          //   </div>
          // </div>

          <DoctorCardComponent doctor={doctor}/>
        ))}
      </div>

      <div>
         <Link to="/all-doctors" className="view-all-btn">View All Doctors</Link>
        </div>
    </section>
  );
};

export default TopDoctors;
