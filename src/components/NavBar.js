import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import './navbar.scss'

function NavBar() {
  
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar" to="/"><img src={logo} alt="logo" /></Link>
            
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/coding">Coding</Link> 
                <Link className="navbar-item" to="/actor">Actor</Link> 
                <Link className="navbar-item" to="/art">Art</Link>
                <Link className="navbar-item" to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
