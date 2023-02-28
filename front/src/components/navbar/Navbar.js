import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import { useState } from 'react'




const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
<header>
    <nav>
      <div className='logo'>
        Vent Board
      </div>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <div className='profile'>
        <img onClick={() => setShowModal(prev=> !prev)} src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-img' />
       {
        showModal &&
        <div className='modal'>
        <Link to="/create">Create</Link>
        <span>Logout</span>
      </div>
       }
      </div>
    </nav>
  )
}

export default Navbar