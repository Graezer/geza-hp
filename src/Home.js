import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// implement scroll navbar

function Home() {
  return (
    <motion.div 
      className='home form-container'
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
    >
      <div className='content columns'>
        <div className='coding column is-gapless'>
          <div className="vh-div">
            <h1>.</h1>
          </div>
          <Link className="App-link h1" to="/coder">CODING</Link> 
        </div>

        <div className='acting column is-gapless '>
          <div className="vh-div">
            <h1>.</h1>
          </div>
          <Link className="App-link h1" to="/actor">
            ACTING
          </Link> 
        </div>
      </div>

      <div className='banner'>
        <div className='is-flex is-align-items-center'>
          <div>
            <h1>Geza Steinert</h1>
            <p>In my chest there are two hearts beating. One for acting and one for coding. In addition there are many more 
subhearts for stand-up comedy, music, directing, writing, reading, painting, drawing, choreography, teaching, dancing and even math. 
With all these rythms it's never quiet inside of me. I learned to focus the noise to get jobs done on time - or to get jobs in the first place.
Feel free to explore my page to get to know which jobs I have done and am proud enough to show. </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
