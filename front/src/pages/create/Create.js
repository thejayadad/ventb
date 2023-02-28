import React from 'react'

const Create = () => {
  return (
    <main>
        <h2>Create Post</h2>
        <div className='container'>
        <div className='register-box'>
        <h2 className='register-text'>Post</h2>
        <input className='register-input' type="text" placeholder="Password" required />
        <input className='register-input' type="password" placeholder="Username" required />
        <input className='register-submit' type="submit" value="Login"></input>
        </div>
    </div>

    </main>
  )
}

export default Create