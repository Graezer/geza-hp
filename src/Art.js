import React from 'react'
import { motion } from 'framer-motion'
import CenteredPhoto from './projects/CenteredPhoto'

function Art() {
  return (
    <motion.div className='art form-container '
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
    >
      <div className='banner'>
        <h1>In the future I will show some of my Art here</h1>
      </div>
      <CenteredPhoto />
    </motion.div>
  )
}

export default Art
