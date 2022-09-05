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
          <div className='coding column'>
            <Link className="App-link h1 ml-3" to="/coder">
              CODING
            </Link> 
          </div>
          <div className='acting column '>
            <Link className="App-link h1 ml-3" to="/actor">
              ACTING
            </Link> 
          </div>
        </div>

        <div className='title'>
          <div className='is-flex is-align-items-center'>
            <div>
              <h1>Geza Steinert</h1>
              <p>In my chest there are two hearts beating. One for acting and one for coding. In addition I have many 
                subhearts pumping: stand-up comedy, music, directing, writing, reading, painting, drawing, choreography, 
                teaching, dancing and even math. 
                I've learned to focus the noise to get jobs done on time - or to get jobs in the first place.
                Feel free to explore my page to get to know which jobs I have done and am proud enough to show. </p>
            </div>
          </div>
        </div>

    </motion.div>
  )
}

export default Home
