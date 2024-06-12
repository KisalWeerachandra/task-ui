import React from 'react';
import './sidebar.css';
import Image from 'next/image';
import profile from '../../../../public/assets/images/profile.jpg';
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoBriefcaseOutline, IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile, CgNotes } from "react-icons/cg";
import { TbStars } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="user-info">
            <Image src={profile}
                width={80}
                height={80}	
                style={{ borderRadius: '50%', marginBottom: '10px'}}
                alt="profile" />
                <div className="user-details">
                    <p className="user-name">Phillips Curtis</p>
                    <p className="user-id">Employee ID: 3035</p>
                </div>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li className="nav-item active"><a href="/home"><RiHomeSmile2Line className='nav-icon'/>Home</a></li>
                    <li className="nav-item"><a href="/services"><IoBriefcaseOutline className='nav-icon'/>Services</a></li>
                    <li className="nav-item"><a href="/profile"><CgProfile className='nav-icon'/>Profile</a></li>
                    <li className="nav-item"><a href="/tickets"><CgNotes className='nav-icon'/>Tickets</a></li>
                    <li className="nav-item"><a href="/payment-info"><IoWalletOutline className='nav-icon'/>Payment Info</a></li>
                    <li className="nav-item"><a href="/feedback-rating"><TbStars className='nav-icon'/>Feedback & Rating</a></li>
                    <li className="nav-item"><a href="/settings"><IoSettingsOutline className='nav-icon'/>Settings</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
