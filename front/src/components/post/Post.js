import React from 'react'
import "./post.css"



const Post = () => {
  return (
    <div className='post'>
       <div className='post-top'>
        <div className='post-details'>
            <div className='top-img'>
                <img src='https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600' alt='top-img' className='cover' />
            </div>
            <h3 className='text'>UserName</h3>
        </div>
       </div>
       <div className='img-box'>
        <img
        alt='img-box'
        className='cover'
        src='https://images.pexels.com/photos/2652496/pexels-photo-2652496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
       />
         <div className='bottom'>
        <i id="icon" class="fas fa-heart"></i>
        <i id='icon' class="fas fa-tv"></i>
        </div>
        </div>

     </div>
  )
}

export default Post