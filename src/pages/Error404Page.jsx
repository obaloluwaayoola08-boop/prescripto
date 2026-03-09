import React from 'react'
import "./Error404Page.css" 
import { Link } from 'react-router-dom'
import NavComponent from '../components/NavComponent'

    
const Error404Page = () => {
  return (
      <div className='error-page'>
          
          <NavComponent/>

          <div className="content-wrapper">
            <img src="/404img.svg" alt="" className='error-image' />
          <h1>
              Error 404: Page Not Found
          </h1>

          <p>
              <Link to="/">Go back to homepage</Link>
          </p>

             </div>

    </div>
  )
}

export default Error404Page