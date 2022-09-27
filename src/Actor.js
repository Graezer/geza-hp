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

      <section className='actor-banner hero is-large'>
        <img className="banner-image" src="" alt="" />
        <div className='hero-body'>
          <p className='title'>Steinert Schauspiel</p>
          <p className='subtitle'>"Ja" - W. Zage</p>
          <div>
          <a className="App-link m-2"
            href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
            rel="noopener noreferrer">
            Portfolio
          </a>
          <div className='photo-description'>
            <p>photo by robert shunev<br/>unsplash.com</p>
          </div>
          </div>
        </div>
      </section>

      <div className='container is-fluid'>
        <div className='is-flex is-justify-content-center m-3'>
          <p>Photos by
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
