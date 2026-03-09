import React from 'react'
import "./SigninPage.css"
import NavComponent from '../components/NavComponent'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  return (
    <div className='sign-in'>
    
          <NavComponent />
    
          <div className='wrapper'>
            <div className='all'>
            <div className='up'>
              <h2>Login</h2>
              <p>Please sign up to book appointment</p>
            </div>
    
            <div className='form'>
    
              <div className='name'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email'/>
              </div>
    
              <div className='name'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password'/>
              </div>
    
              <button className='button-blue'>Login</button>
            </div>
    
            <div className='down'>
              <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
           </div>
          </div>
        </div>
  )
}

export default SigninPage