import React from 'react'

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <a href="">Felipe Costa</a>
        <button 
        className="navbar-toggler"
        type="button"
        data-toggler= "collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i id="navbar-toggle" className="fas fa-angle-down" aria-hidden="true">

        </i>
        </button>
      </div>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#">Blog</a></li>
          <li className="nav-item"><a href="#">Sobre</a></li>
          <li className="nav-item"><a href="#">Projetos</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation;