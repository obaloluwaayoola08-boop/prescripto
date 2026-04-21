import React from 'react'
import "./ProfilePage.css"
import NavComponent from '../components/NavComponent'
import FooterComponent from '../components/FooterComponent'



const ProfilePage = () => {
    return (
        <div>
          
            <div className='profile-page'>

            <div className='prof-img'>
                <img src='/pro.png' alt=''></img>
                <img src='/profileimage.png' alt=''></img>
            </div>


            <div className='paar'>
                <h2 className='head'>Edward Vincent</h2>
                <h3 className='head2'>CONTACT INFORMATION</h3>
            </div>




            <div className='mation'>
                <div className='conntact'>
                    <p className='mail'>Email id:</p>
                    <p className='phonn'>Phone:</p>
                    <p className='add'>Address: </p>
                </div>

                <div className='emails'>
                    <p className='mail2'>richardjameswap@gmail.com</p>
                    <p className='phonn2'>+1  123 456 7890</p>
                    <p className='add2'>57th Cross, Richmond <br /> Circle,Church Road, London</p>
                </div>
            </div>

            <h3 className='head2'>BASIC INFORMATION</h3>

            <div className='mation'>
                <div className='informate'>
                    <p className='gendd'>Gender:</p>
                    <p className='date'>Birthday:</p>
                </div>
                <div className='info'>
                    <p className='gend'>Male</p>
                    <div className='july'>
                    <p className=''>20 </p>
                     <p className=''>July, </p>
                      <p className=''>2024</p>
                    </div>
                </div>

            </div>


            <div className="button-container">
                <button className="btn edit-btn">Edit</button>
                <button className="btn save-btn">Save Information</button>
            </div>
            </div>
            <FooterComponent />

        </div>
    )
}

export default ProfilePage