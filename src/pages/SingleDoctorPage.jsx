import React, { useState, useEffect } from "react";
import male1 from "../assets/male1.png";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./SingleDoctorPage.css";
import verify from "../assets/verify.png";

import { useNavigate, useParams } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import DoctorCardComponent from "../components/DoctorCardComponent";

const SingleDoctorPage = (props) => {
  const navigate = useNavigate();
  const { doctorid } = useParams();

  console.log(typeof doctorid);

  console.log(doctorid);

  const [doctorInfo, setDoctorInfo] = useState({});

  useEffect(() => {
    const doctorObject = props.doctorData.filter(
      (item) => item.id === parseInt(doctorid),
    );
    console.log(doctorObject);
    setDoctorInfo(doctorObject[0]);
  }, [doctorid]);

  // useEffect(() => {
  //   console.log(doctorid);
  //   console.log(doctorsArray);

  // },[]);

  return (
    <div className="single-doctor-page">
      <div className="details-wrapper">
        <div className="pictures-wrapper">
          <img src={doctorInfo?.img} alt="Alice" />
        </div>

        <div className="details">
          <div className="name">
            <div className="verified">
              <h1>{doctorInfo?.name}</h1>
              <img src={verify} alt="" />
            </div>
            <p>
              MBBS - {doctorInfo?.speciality}{" "}
              <span className="no-years">
                {doctorInfo?.yearsOfExperience} Years
              </span>
            </p>
          </div>

          <div className="about">
            <h3>
              About <IoMdInformationCircleOutline />
            </h3>
            <p>{doctorInfo?.about}</p>
          </div>

          <div className="fee">
            <p>
              Appointment fee: <h3>$ {doctorInfo?.appointmentFee} </h3>
            </p>
          </div>
        </div>
      </div>

      <div className="booking-slot">
        <h4>Booking slots</h4>

        <div className="weeks">
          <button>
            MON <br />
            10
          </button>
          <button>
            TUE <br />
            11
          </button>
          <button>
            WED <br />
            12
          </button>
          <button>
            THU <br />
            13
          </button>
          <button>
            FRI <br />
            14
          </button>
          <button>
            SAT <br />
            15
          </button>
          <button>
            SUN <br />
            16
          </button>
        </div>

        <div className="time">
          <button>8.00 am</button>
          <button>8.30 am</button>
          <button>9.00 am</button>
          <button>9.30 am</button>
          <button>10.00 am</button>
          <button>10.30 am</button>
          <button>11.00 am</button>
          <button>11.30 am</button>
        </div>

        <div className="button">
          <button>Book an appointment</button>
        </div>
      </div>

      <div className="related-doctors">
        <div className="heading">
          <h2>Related Doctors</h2>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        <div className="doctors-container">
          {props.doctorData?.slice(0,5).map((doctor) => (
        <DoctorCardComponent doctor={doctor}/>
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

      <FooterComponent />
    </div>
  );
};

export default SingleDoctorPage;
