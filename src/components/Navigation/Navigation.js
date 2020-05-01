import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome'

import './Navigation.css'

const Navigation = () => {


  return (
    <nav className="nav--section">
      <div className="container-fluid">
        <a href="#top" className="navbar-brand">Felipe Costa</a>
        <button 
        className="navbar-toggler"
        type="button"
        data-toggler= "collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <FontAwesomeIcon id="navbar-toggle" aria-hidden="true" className="arrow-down" icon={'angle-down'} />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation;