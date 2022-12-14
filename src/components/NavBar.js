import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import '../sass/App.scss'

function NavBar() {

  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <Link className="App-logo" to="/"><img src={logo} alt="logo" /></Link>
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/coder">Coder</Link> 
            <Link className="navbar-item" to="/actor">Actor</Link> 
            <Link className="navbar-item" to="/art">Art</Link>
            <Link className="navbar-item" to="/">Home</Link> 
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
