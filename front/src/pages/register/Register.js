import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./register.css"
import { useState } from 'react'


const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleRegister = async(e) => {
    try {

    } catch (error) {

    }
  }
  return (
    <main>
        <div className='container'>
            <div className='register-box'>
            <h2 className='register-text'>Ready to Join?</h2>
            <form onSubmit={handleRegister}>
            <input className='register-input' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input className='register-input' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <input className='register-input' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input className='register-submit' type="submit" value="Login"></input>
            <span>Already a memeber?</span><Link to="/login">Login</Link>
            </form>
            </div>
        </div>
    </main>
  )
}

export default Register