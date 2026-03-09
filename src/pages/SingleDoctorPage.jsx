import React, {useState, useEffect} from 'react'
import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import male3 from "../assets/male3.png";
import female1 from "../assets/female1.png";
import female2 from "../assets/female2.png";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./SingleDoctorPage.css"
import verify from "../assets/verify.png"

import { useParams } from 'react-router-dom'
import FooterComponent from '../components/FoooterComponent';

const SingleDoctorPage = () => {

  const {doctorid} = useParams();

   const doctorsArray = [
      {
        id: 1,
        name: "Richard James",
        speciality: "General Physician",
        status: "Available",
        img: male1,
      },
      {
        id: 2,
        name: "Alice Smith",
        speciality: "Dermatologist",
        status: "Unavailable",
        img: female1,
      },
      {
        id: 3,
        name: "John Doe",
        speciality: "Cardiologist",
        status: "Available",
        img: male2,
      },
      {
        id: 4,
        name: "Emily Davis",
        speciality: "Pediatrician",
        status: "Unavailable",
        img: female2,
      },
      {
        id: 5,
        name: "Michael Brown",
        speciality: "Neurologist",
        status: "Available",
        img: male3,
      },
    ];

  console.log(doctorid);

  const {doctorInfo, setDoctorInfo} = useState({});
   const doctorObject = doctorsArray.filter(item =>item.id === doctorid );
   console.log(doctorObject);

  // useEffect(() => {
  //   console.log(doctorid);
  //   console.log(doctorsArray);
      
       
  // },[]);


  return (
    <div className="single-doctor-page">
      <div className="details-wrapper">

        <div className="pictures-wrapper">
                      <img src={male1} alt="Alice" />
       </div>


       <div className='details'>
        <div className='name'>
          <div className='verified'>
            <h1>Dr. Richard James</h1>
           <img src={verify} alt="" />
          </div>
          <p>MBBS - General Physician <span className='no-years'>2 Years</span></p>
        </div>

        <div className='about'>
          <h3>About <IoMdInformationCircleOutline /></h3>
          <p>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective 
treatment strategies.</p>
        </div>

        <div className='fee'>
          <p>Appointment fee: <h3>$50 </h3></p>
        </div>
        
       </div>

      </div>

      <div className='booking-slot'>

        <h4>Booking slots</h4>

        <div className='weeks'>
          <button>MON <br />10</button>
          <button>TUE <br />11</button>
          <button>WED <br />12</button>
          <button>THU <br />13</button>
          <button>FRI <br />14</button>
          <button>SAT <br />15</button>
          <button>SUN <br />16</button>
        </div>

        <div className='time'>
          <button>8.00 am</button>
          <button>8.30 am</button>
          <button>9.00 am</button>
          <button>9.30 am</button>
          <button>10.00 am</button>
          <button>10.30 am</button>
          <button>11.00 am</button>
          <button>11.30 am</button>
        </div>

        <div className='button'>
          <button>Book an appointment</button>
        </div>
      </div>

      <div className='related-doctors'>
        <div className='heading'>
          <h2>Related Doctors</h2>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>

          <div className="doctors-container">
                  {doctorsArray.map((doctor) => (
                      <div onClick={() => {
                          navigate(`/all-doctors/${doctor.id}`)
                    }} key={doctor.id} className="doctor-card">
                      <div className="picture-wrapper">
                        <img src={doctor.img} alt="Alice" />
                      </div>
          
                          <div className="doctor-details">
                              {
                                  doctor.status === "Available" ? (
                                      <h5>
          
                          <span>Available</span>
                        </h5> 
                                  ) : (
                                           <h5 className="unavailable">
                          <span>Not Available</span>
                        </h5>
                                  )
                              }
                       
                        <h3>Dr. {doctor.name} </h3>
                              <p>{doctor.speciality}</p>
                      </div>
                    </div>
                  ))}
          </div>
      </div>

        {/* <div className="doctor-info">

          <h2>Dr RIchard James

            <span >
              <RiVerifiedBadgeFill />
            </span>

            </h2>
            <p>MBBS - General Physician  <span className="duration">2 years</p>
            <h4>About <span><IoMdInformationCircleOutline />
</span></h4>

          </div> */}


          <FooterComponent/>
          </div>

    
  )
}

export default SingleDoctorPage