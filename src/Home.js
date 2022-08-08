import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='form-container'>
      <div className='banner'>
        <h1>Geza Steinert</h1>
        <p>web developer and actor</p>
        <img className="App-logo" src={logo} alt="logo" />
          <p>choose a path you want to continue on..</p>
      </div>

      <div className='content'>
        <div className='coding'>

          <Link className="m-2 App-link" to="/coding">see coding projects and external links</Link> 
        </div>

        <div>
          <p className='m-5'>AND</p>
        </div>
        
        <div className='acting is-flex is-align-content-center'>

          <Link className="m-2 App-link" to="/acting">see external links to my acting career</Link> 
          <a
            className="App-link"
            href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home
