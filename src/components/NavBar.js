import React from 'react'
import { Link } from 'react-router-dom'

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
            <a className="navbar-item">
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/art">Art</Link> 
                <Link className="navbar-item" to="/actor">Actor</Link> 
                <Link className="navbar-item" to="/contact">Contact</Link> 
                <hr className="navbar-divider" />
              </div>
            </div>
          </div>

          
        </div>
      </nav>

    </div>
  )
}

export default NavBar
