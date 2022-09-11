import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './components/Carousel'

function Actor() {
  return (
    <motion.div
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
      className='actor form-container'
    >
        <div className='banner'>
          <h1>Steinert Schauspiel</h1>
          <a className="App-link m-2"
            href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
            rel="noopener noreferrer">
            Portfolio
          </a>
        </div>

        <div className='container is-fluid'>
          <div className='is-flex is-justify-content-center m-3'>
            <p className=''>Fotos by
              <a className='App-Link m-2' rel="noopener noreferrer" href="https://alanovaska.com/about.html">Alan Ovaska</a>
              - 2020
            </p>
          </div>
          <Carousel />
        </div>

    </motion.div>
  )
}

export default Actor
