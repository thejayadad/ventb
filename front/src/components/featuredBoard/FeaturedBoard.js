import React from 'react'

import "./featureboard.css"
import Cards from '../boardCards/Cards'

const FeaturedBoard = () => {
  return (
    <section className='wrapper'>
      <div className='box'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

      </div>
    </section>
  )
}

export default FeaturedBoard