import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import FeaturedBoard from '../../components/featuredBoard/FeaturedBoard'
import Post from '../../components/post/Post'


const Home = () => {
  return (
    <div>
        <Navbar />
        <main className='main'>
        <FeaturedBoard />
        <Post />

        </main>
    </div>
  )
}

export default Home