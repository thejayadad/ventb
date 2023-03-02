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
        <span onClick={() => setShowModal (prev => !prev)}>Login</span>
        {
          showModal &&
          <div>
            <Link to="/create">Create</Link>
            <span>Logout</span>
          </div>
        }
      </div>
    </div>
    </header>
  )
}

export default Navbar