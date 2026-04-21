import React, { useState } from "react"
import "./FooterComponent.css"
import { Link } from 'react-router-dom'
import "./FooterComponent.css"



const FooterComponent = () => {
  return (
    <>
      <footer className="footer">
        <div className='foot'>
         <img src="/logo.svg" alt="" className='logo' />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='footters'>
          <div className='comp'>
            <h3>COMPANY</h3>
            <p>Home</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy policy</p>
          </div>

          <div className='comp'>
            <h3>Get-in-touch</h3>
            <p>+1-212-456-7890</p>
            <p>greatstackdev@gmail.com</p>
          </div>
        </div>

      </footer>
    </>
  )
}
export default FooterComponent;