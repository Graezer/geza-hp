import React from 'react'
import logo from './logo.svg';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My floating head welcomes you..</p>
        <a
          className="App-link"
          href="https://github.com/Graezer"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am a coder!
        </a>
        <h3>and</h3>
        <a
          className="App-link"
          href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am an actor!
        </a>
        <p>choose a path you want to continue on..</p>
      </header>
    </div>
  )
}

export default Home
