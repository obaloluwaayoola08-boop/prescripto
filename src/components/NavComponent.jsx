import React from 'react'
import "./NavComponent.css"
import { Link } from 'react-router-dom'


const NavComponent = () => {
  return (
      <nav>
          <div className='nav-logo'>
              <img src='/logo.svg' alt='logo'/>
              
          </div>

          <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/all-doctors">All Doctors</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>            
              </ul>       
          </div>

          <div>
              <button className='button-blue'>
                  Create Account
              </button>
              
          </div>
    </nav>
  )
}

export default NavComponent