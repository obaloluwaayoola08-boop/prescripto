import React, { useState, useEffect } from 'react'
import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import male3 from "../assets/male3.png";
import female1 from "../assets/female1.png";
import female2 from "../assets/female2.png";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./SingleDoctorPage.css"

import { useParams } from 'react-router-dom'
import NavComponent from '../components/NavComponent';

const SingleDoctorPage = () => {

  const { doctorid } = useParams();

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
    {
      id: 6,
      name: "Sarah Wilson",
      speciality: "Gastroenterologist",
      status: "Unavailable",
      img: female1,
    },
    {
      id: 7,
      name: "David Lee",
      speciality: "Orthopedic Surgeon",
      status: "Available",
      img: male1,
    },
    {
      id: 8,
      name: "Jessica Taylor",
      speciality: "Psychiatrist",
      status: "Unavailable",
      img: female2,
    },
    {
      id: 9,
      name: "Robert Anderson",
      speciality: "Ophthalmologist",
      status: "Available",
      img: male2,
    },
    {
      id: 10,
      name: " Jennifer Martinez",
      speciality: "Endocrinologist",
      status: "Unavailable",
      img: female1,
    },
  ];

  console.log(doctorid);

  const { doctorInfo, setDoctorInfo } = useState({});
  const doctorObject = doctorsArray.filter(item => item.id === doctorid);
  console.log(doctorObject);

  // useEffect(() => {
  //   console.log(doctorid);
  //   console.log(doctorsArray);


  // },[]);


  return (
    <div className="single">

      <NavComponent />
      <div className="details-wrapper">

        <div className="picture-wrapper">
          <img src={male1} alt="Alice" />
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

    </div>

    
  )
}

export default SingleDoctorPage