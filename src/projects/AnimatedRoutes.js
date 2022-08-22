import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from '../Home.js'
import Coder from '../Coder.js'
import Art from '../Art.js'
import Actor from '../Actor'

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Coder" element={<Coder/>}/>
        <Route path="/Actor" element={<Actor/>}/>
        <Route path="/Art" element={<Art/>}/> 
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
