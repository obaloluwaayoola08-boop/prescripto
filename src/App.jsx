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

import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignUpPage";
import SingleDoctorPage from "./pages/SingleDoctorPage";
import Error404Page from "./pages/Error404Page";
import Appointmentpage from "./pages/Appointmentpage";
import ProfilePage from "./pages/ProfilePage";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
   })
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/appointment" element={<Appointmentpage/>} />
      <Route path="/all-doctors" element={<AllDoctorsPage />} />
      <Route path="/all-doctors/:doctorid" element={<SingleDoctorPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<Error404Page/>}/>
      <Route path="/profile" element={<ProfilePage/>}/> 
    </Routes>
  );
}

export default App;
