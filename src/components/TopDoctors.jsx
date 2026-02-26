import React from "react";

import { GoDotFill } from "react-icons/go";
import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import male3 from "../assets/male3.png";
import female1 from "../assets/female1.png";
import female2 from "../assets/female2.png";
import "./TopDoctors.css";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
    const navigate = useNavigate();
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
  return (
    <section className="top-doctors">
      <h2>Top Doctors To Book</h2>
      <p>Simply browse through our extensive list of trusted doctors</p>

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
             
              <h3>Dr. {doctor.name} </h3>
                    <p>{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDoctors;
