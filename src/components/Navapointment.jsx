import React, { useState } from 'react'
import "./NavComponent.css"
import { ImCancelCircle } from "react-icons/im";
import { Link } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";


const NavComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav>
            <div className='nav-logo'>
                <img src='/logo.svg' alt='logo' />
            </div>

            <div className='large-screen'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-doctors">All Doctors</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/Appointment">My appointment</Link></li>
                </ul>
            </div>
            <div className='profile-nav'>
                <img src='profile img.svg' alt='logo' />
               
            </div>



            {
                isMenuOpen === false ? (
                    <div className='small-screen'
                        onClick={() => {
                            setIsMenuOpen(true);
                        }}
                    >
                        <IoMenuSharp />
                    </div>
                ) : (
                    <div className={`small-screen-menu slide ${isMenuOpen === true ? "slide-in-right" : "slide-out-left"}`}>

                        <div className='nav-logo'>
                            <img src='/logo.svg' alt='logo' />


                            <div onClick={() => {
                                setIsMenuOpen(false);
                            }}>


                                <ImCancelCircle />
                            </div>




                        </div>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-doctors">All Doctors</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>

                      

                    </div>
                )
            }







        </nav>
    )
}

export default NavComponent