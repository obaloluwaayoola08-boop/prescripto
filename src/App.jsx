import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllDoctorsPage from "./pages/AllDoctorsPage";
import ContactPage from "./pages/ContactPage";
import male1 from "./assets/male1.png";
import male2 from "./assets/male2.png";
import male3 from "./assets/male3.png";
import female1 from "./assets/female1.png";
import female2 from "./assets/female2.png";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignUpPage";
import SingleDoctorPage from "./pages/SingleDoctorPage";
import Error404Page from "./pages/Error404Page";
import Appointmentpage from "./pages/AppointmentPage";
import ProfilePage from "./pages/ProfilePage";


function App() {

  const doctorsArray = [
    {
      id: 1,
      name: "Richard James",
      speciality: "General Physician",
      status: "Available",
      img: male1,
      about: "Dr. Richard is a competent general physician with over 2 years of experience. He is dedicated to providing comprehensive healthcare services and ensuring the well-being of his patients.",
      appointmentFee: 1000,
       yearsOfExperience: 2
    },
    {
      id: 2,
      name: "Alice Smith",
      speciality: "Dermatologist",
      status: "Unavailable",
      img: female1,
      about: "Dr. Alice is a skilled dermatologist with over 3 years of experience. She specializes in diagnosing and treating various skin conditions, helping patients achieve healthy and radiant skin.",
      appointmentFee: 1500,
       yearsOfExperience: 3
    },
    {
      id: 3,
      name: "John Doe",
      speciality: "Cardiologist",
      status: "Available",
      img: male2,
      about: "Dr. John is an experienced cardiologist with over 5 years of practice. He is committed to providing exceptional cardiovascular care, utilizing advanced diagnostic techniques and personalized treatment plans.",
      appointmentFee: 2000,
       yearsOfExperience: 5

    },
    {
      id: 4,
      name: "Emily Davis",
      speciality: "Pediatrician",
      status: "Unavailable",
      img: female2,
      about: "Dr. Emily is a compassionate pediatrician with over 4 years of experience. She is dedicated to providing comprehensive healthcare for children, ensuring their growth and development are on track.",
      appointmentFee: 4000,
       yearsOfExperience: 4
    },
    {
      id: 5,
      name: "Michael Brown",
      speciality: "Neurologist",
      status: "Available",
      img: male3,
      about: "Dr. Michael is a skilled neurologist with over 6 years of experience. He specializes in diagnosing and treating neurological disorders, providing personalized care to improve patients' quality of life.",
      appointmentFee: 5000,
       yearsOfExperience: 6

    },
    {
      id: 6,
      name: "Sarah Wilson",
      speciality: "Gastroenterologist",
      status: "Unavailable",
      img: female1,
      about: "Dr. Sarah is an experienced gastroenterologist with over 3 years of practice. She is dedicated to providing comprehensive care for digestive health, utilizing advanced diagnostic techniques and personalized treatment plans.",
      appointmentFee: 3500,
       yearsOfExperience: 3
    },
    {
      id: 7,
      name: "David Lee",
      speciality: "Orthopedic Surgeon",
      status: "Available",
      img: male1,
      about: "Dr. David is a skilled orthopedic surgeon with over 7 years of experience. He specializes in diagnosing and treating musculoskeletal conditions, providing personalized care to help patients regain mobility and improve their quality of life.",
      appointmentFee: 6000,
       yearsOfExperience: 7
    },
    {
      id: 8,
      name: "Jessica Taylor",
      speciality: "Psychiatrist",
      status: "Unavailable",
      img: female2,
      about: "Dr. Jessica is a compassionate psychiatrist with over 4 years of experience. She is dedicated to providing comprehensive mental health care, utilizing evidence-based therapies and personalized treatment plans to support her patients' well-being.",
      appointmentFee: 4500,
       yearsOfExperience: 4
    },
    {
      id: 9,
      name: "Robert Anderson",
      speciality: "Ophthalmologist",
      status: "Available",
      img: male2,
      about: "Dr. Robert is a skilled ophthalmologist with over 5 years of experience. He specializes in diagnosing and treating eye conditions, providing personalized care to help patients maintain optimal vision and eye health.",
      appointmentFee: 3000,
       yearsOfExperience: 5
    },
    {
      id: 10,
      name: " Jennifer Martinez",
      speciality: "Endocrinologist",
      status: "Unavailable",
      img: female1,
      about: "Dr. Jennifer is an experienced endocrinologist with over 4 years of practice. She is dedicated to providing comprehensive care for hormonal disorders, utilizing advanced diagnostic techniques and personalized treatment plans to help patients achieve optimal health.",
      appointmentFee: 4000,
      yearsOfExperience: 4
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
   })
  
  return (
    <>
      <NavComponent/>
   
    <Routes>
      <Route path="/" element={<HomePage doctorsData= {doctorsArray} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/all-doctors" element={<AllDoctorsPage doctorsdata= {doctorsArray} />} />
      <Route path="/all-doctors/:doctorid" element={<SingleDoctorPage doctorData = {doctorsArray}/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<Appointmentpage />} />
      <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="*" element={<Error404Page/>}/>
      </Routes>
      </>
  );
}

export default App;
