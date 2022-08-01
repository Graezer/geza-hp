import React from 'react'

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
                <a className="navbar-item">
                  Art
                </a>
                <a className="navbar-item">
                  Actor
                </a>
                <a className="navbar-item">
                  Contact
                </a>
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
