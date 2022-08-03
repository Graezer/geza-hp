import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>floaty head welcomes you..</p>
        <a
          className="App-link"
          href="https://github.com/Graezer"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am a coder!
        </a>
        <Link className="navbar-item button is-info" to="/coding">Coding</Link> 
        <h3>and</h3>
        <a
          className="App-link"
          href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am an actor!
        </a>
        <Link className="navbar-item button is-info" to="/acting">Acting</Link> 
        <p>choose a path you want to continue on..</p>
      </header>
    </div>
  )
}

export default Home
