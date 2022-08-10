import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='form-container'>
      <div className='banner'>
        <div className='is-flex is-align-items-center'>
          <img className="App-logo" src={logo} alt="logo" />
          <div>
            <h1>Geza Steinert</h1>
            <h3>Web Developer and Actor</h3>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>

      <div className='content'>
        <div className='coding'>
          <Link className="m-2 App-link" to="/coding">see coding projects etc.</Link> 
        </div>

        <div>
          <p className='m-5'>OR</p>
        </div>

        <div className='acting is-flex is-align-items-center'>
          <Link className="m-2 App-link" to="/acting">
            have a look at my acting career
          </Link> 
            <div>
              <p className='m-5'>OR</p>
            </div>
          <div className=''>
            <a className="App-link m-3"
              href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
              rel="noopener noreferrer">
              my Portfolio
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
