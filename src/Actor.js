import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './components/Carousel'



function Actor() {
  return (
    <motion.div
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
      className='actor form-container container'
    >
        <div className='banner'>
          <div className="vh-div">
            <h1>.</h1>
          </div>
          <h1>Steinert Schauspiel</h1>
          <a className="App-link m-2"
            href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
            rel="noopener noreferrer">
            Portfolio
          </a>
        </div>

        <div className='container '>
          <p>2020 by Alan Ovaska</p>
          <Carousel />
        </div>
    </motion.div>
  )
}

export default Actor
