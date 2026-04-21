
import { GoDotFill } from "react-icons/go";
import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import male3 from "../assets/male3.png";
import female1 from "../assets/female1.png";
import female2 from "../assets/female2.png";
import "./AlldocComponent.css";
import DoctorCardComponent from "./DoctorCardComponent";

const AlldocComponent = (props) => {
   
  
  return (
    <section className="top-doctors">
      <div className="doctors-container">
        {props.doctors?.map((doctor) => (
           <DoctorCardComponent doctor={doctor}/>
        ))}
      </div>
    </section>
  );
};

export default AlldocComponent;