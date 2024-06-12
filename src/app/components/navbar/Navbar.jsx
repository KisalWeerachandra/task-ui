import React from 'react'
import './navbar.css'
import Image from 'next/image'
import logo from '../../../../public/assets/images/logo.png'
import profiile from '../../../../public/assets/images/profile.jpg'
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>
          <Image src={logo}
          width={60}
          height={60}
          alt="logo" /> 
          <h1>SparkSocket</h1>
        </div>
        <div className='nav-items'>
            <div className = "search-bar"> 
            <input type="text" placeholder="&#xF002; Search..." />
            </div>
            <div className="notification">
            <FaRegBell className='nav-icons'/>
            </div>
            <div className="profile">
                <Image src={profiile}
                width={40}
                height={40}	
                style={{ borderRadius: '50%' }}
                alt="profile" />

                <div className='username'>
                    <p className='name'>Dipak Deb Nath</p>
                    <p className='role'>Super Admin</p>
                </div>
            </div>
            <div className="notification">
            <IoMdArrowDropdown className='nav-icons'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar