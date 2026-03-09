import React from 'react'
import "./SignupPage.css"
import NavComponent from '../components/NavComponent'
import { Link } from 'react-router-dom'
const SignupPage = () => {
  return (
    <div className="sign-up">
    
        <NavComponent />
      
      <div className='form-wrapper'>
      <div className='form'>
        <div>
          <h3>Create Account</h3>
          <p>Please sign up to book appointment</p>
        </div>
        <div>
          <h4 className='fullname'>Full Name</h4>
          <input className='input'></input>
        </div>

        <div>
          <h4 className='fullname'>Email</h4>
          <input className='input'></input>
        </div>

        <div>
          <h4 className='fullname'>Password</h4>
          <input className='input'></input>
        </div>

        <button className='button-solid'>Create account</button>
        <div className='already'>
          Already have an account? <Link to="/signin">login here</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignupPage