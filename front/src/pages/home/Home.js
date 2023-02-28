import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import FeaturedBoard from '../../components/featuredBoard/FeaturedBoard'


const Home = () => {
  return (
    <div>
        <Navbar />
        <FeaturedBoard />
    </div>
  )
}

export default Home