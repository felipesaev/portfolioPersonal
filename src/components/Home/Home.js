import React from 'react'

import Logo from '../../images/logo.png';
// Style
import './Home.css'

const Home = () => {
  return (
  <div className="container">
      <div className="content-img">
        <img src={Logo}/>
      </div>
      <div className="context-title">
        <h2>Felipe Costa</h2>
        <h3>Desenvolvedor Front end.</h3>
      </div>
    </div>
  )
}

export default Home;
