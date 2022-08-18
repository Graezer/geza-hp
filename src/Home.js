import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='form-container home-container'>
      <div className='content columns'>
        <div className='coding column is-gapless'>
          <div className="vh-div">
            <h1></h1>
          </div>
          <Link className="m-3 App-link h1" to="/coder">CODING</Link> 
        </div>

        <div className='acting column is-gapless '>
          <div className="vh-div">
            <h1></h1>
          </div>
          <Link className="m-3 App-link h1" to="/acting">
            ACTING
          </Link> 
        </div>
      </div>

      <div className='banner'>
        <div className='is-flex is-align-items-center'>
          <div>
            <h1>Geza Steinert</h1>
            <p>In my chest there are two hearts beating. An acting heart and a coding heart. And many more 
subhearts for stand-up comedy, music, directing, writing, reading, painting, drawing, choreography, teaching, dancing and even math. 
With all these rythms it's never quiet inside of me. I learned to focus the noise to get jobs done on time - or to get jobs in the first place.
Feel free to explore my page to get to know which jobs I have done and am proud enough to show. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
