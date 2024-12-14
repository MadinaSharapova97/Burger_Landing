'use client'

import React from 'react'
import Delivery from './Delivery/Delivery'
import Feature from './Features/Feature'
import Hero from './Hero/Hero'
import Newsletter from './Newsletter/Newsletter'
import PopularBurger from './PopularBurger/PopularBurger'
import Reservation from './Reservation/Reservation'
import Team from './Team/Team'


const Home = () => {

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
    </div>
  )
}

export default Home