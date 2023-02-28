import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <main>
    <div className='container'>
        <div className='register-box'>
        <h2 className='register-text'>Login?</h2>
        <input className='register-input' type="text" placeholder="Password" required />
        <input className='register-input' type="password" placeholder="Username" required />
        <input className='register-submit' type="submit" value="Login"></input>
        </div>
    </div>
</main>
  )
}

export default Login