import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import { useState } from 'react'




const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
<header>
    <div className='nav-container'>
      <span>Vent Board</span>

      <div className='profile'>
        profile
      </div>
    </div>
    </header>
  )
}

export default Navbar