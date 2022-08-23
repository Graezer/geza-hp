import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './components/Carousel'



function Actor() {
  return (
    <motion.div
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
      className='actor'
    >
      <div className='form-container '>
        <div className='banner'>
          <div className="vh-div">
            <h1>.</h1>
          </div>
          <h1>In the future this Page will present Showreels and Photos</h1>
          <p>until then, check out my
            <a className="App-link m-2"
              href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
              rel="noopener noreferrer">
              Portfolio
            </a>
          </p>
        </div>

        <div className='carousel__container'>
          <Carousel />
        </div>
      </div>
    </motion.div>
  )
}

export default Actor
