import React from 'react'
import "./card.css"

const Cards = () => {
  return (
    <div>
       <div className='status-card'>
          <div className='profile-pic'>
            <img
            src='https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='profile-pic'
            />
          </div>
          <div className='username'>
            Username
          </div>
        </div>

    </div>
  )
}

export default Cards