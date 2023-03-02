import React from 'react'
import "./login.css"
import {useDispatch} from 'react-redux'
import { login } from '../../redux/authSlice'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(email === '' || password === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      }


      const data = await request("/auth/login", 'POST', options, {email, password})
       console.log(data)
      dispatch(login(data))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
    <div className='container'>
        <div className='register-box'>
        <h2 className='register-text'>Login?</h2>
        <form onSubmit={handleLogin}>
        <input onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder="Email" required />
        <input onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder="Username" required />
        <input className='register-submit' type="submit" value="Login"></input>
        </form>
        </div>
    </div>
</main>
  )
}

export default Login