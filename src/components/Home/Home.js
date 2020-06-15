import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome'

//Components
import Navigation from '../Navigation/Navigation'


import Logo from '../../images/logo.png';
// Style
import './Home.css'

const Home = () => {
  return (

    <div className="container">
      <Navigation/>
      <div className="content-img">
        <img src={Logo}/>
      </div>
      <div className="context-title">
        <h2>Felipe Costa</h2>
        <h3>Desenvolvedor Front end.</h3>
      </div>

      <div className="container-text">
        <div className="row-justify">
          <p className="p-2">
          Olá, me chamo Felipe tenho 26 anos e sou um desenvolvedor front end,
          nascido na cidade Araripina, cituada no Pernambuco.
          </p>
          <p className="p-2">
          Sou apaixonado pelo meu trabalho e espero um dia contribuir para minha
          nação. Desde de criança pratico basquetebol, entao estrategia
          e velocidade são meu segundo nome. Alem disso, sou gago
          ( por isso da foto acima, admiro o personagem que sempre está feliz e confiante apesar da dificuladde na fala, esse sou eu em meio as minhas “dificuldades” que prefiro coloca-cas como desafios.
          </p>
          <p className="p-2">
          Minha “palheta” de conhecimentos diarios consiste principalmente
          em Html, css e Javascript, com extensão em framework como (Reactjs)
          assim como MongoDb, Express.js, Node.js ( MEAN ). mas você pode
          rolar para baixo para verificar om detalhes meus projetos e outras
          possiveis tecnologias.
          </p>

        </div>
      </div>
        <FontAwesomeIcon aria-hidden="true" id="scroll" href="/projects" className="bounce" icon={'angle-down'} />

    </div>
  )
}

export default Home;
