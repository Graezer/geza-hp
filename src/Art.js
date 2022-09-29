import React from 'react'
import { motion } from 'framer-motion'
// import CenteredPhoto from './projects/CenteredPhoto'

function Art() {
  return (
    <motion.div 
      className='art form-container '
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
    >

      <section className='art-banner hero is-large'>
        <div className='hero-body'>
          <p className='title'>Willem Artus & Emzelius Banane</p>
          <p className='subtitle'>"in future I'll show som'f my art here.. patience" - G. Steinert</p>
        
          <div>
            <div className='photo-description'>
            <p>photo by pawel czerwinski <br/> unsplash.com</p>
          </div>
          </div>
        </div>
      </section>

    </motion.div>


  )
}

export default Art
