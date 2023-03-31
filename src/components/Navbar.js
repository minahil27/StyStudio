import React from 'react'
import logo from '../assets/logo.png'
import  './Home.css'

function Navbar() {
  return (
    <div className='top'>
        <div className='navwidth'>
            <div className='menubar'>
                <div className='logoimgbox'>
                    <div className='bothlogo'>
                    <img className='logo' src={logo} alt="none" />
                    <h1 className='name'>StyStudio</h1>
                    </div>
                </div>
                <div className='navlinks'>
                    <div className='menuflex'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Gallery</a></li>
                            <li><a href='/'>Contact</a></li>
                            <li><a href='login'>Login</a></li>
                            <li><a href='/'>Register</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar