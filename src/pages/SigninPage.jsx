import React from 'react'
import "./SignupPage.css"
import NavComponent from '../components/NavComponent'
import { Link } from 'react-router-dom'
const SignupPage = () => {
  return (
    <div className="sign-up">
    
       
      
      <div className='form-wrapper'>
      <div className='form'>
        <div>
          <h3>Login</h3>
          <p>Please login to book appointment</p>
        </div>
       

        <div>
          <h4 className='fullname'>Email</h4>
          <input className='input'></input>
        </div>

        <div>
          <h4 className='fullname'>Password</h4>
          <input className='input'></input>
        </div>

        <button className='button-solid'>Login</button>
        <div className='already'>
         <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignupPage