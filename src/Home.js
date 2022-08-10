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
        <div>
          <p className='m-3'>continue to..</p>
        </div>

        <div className='coding is-flex is-align-items-center'>
          <Link className="m-3 App-link" to="/coding">CODING</Link> 
        </div>

        <div>
          <p className='m-3'>or</p>
        </div>

        <div className='acting is-flex is-align-items-center'>
          <Link className="m-3 App-link" to="/acting">
            ACTING
          </Link> 
        </div>
      </div>

    </div>
  )
}

export default Home
