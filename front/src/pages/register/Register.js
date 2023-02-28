import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <main>
        <div className='container'>
            <div className='register-box'>
            <h2 className='register-text'>Ready to Join?</h2>
            <input className='register-input' type="email" placeholder="Email" required />
            <input className='register-input' type="text" placeholder="Password" required />
            <input className='register-input' type="password" placeholder="Username" required />
            <input className='register-submit' type="submit" value="Login"></input>
            </div>
        </div>
    </main>
  )
}

export default Register