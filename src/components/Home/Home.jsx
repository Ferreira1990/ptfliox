import React from 'react'
import '../Home/Home.css'

import Meicon from '../../assets/me.png'
import lnk from '../../assets/linkedin.png'
import tlg from '../../assets/Telegram.png'

const Home = () => {
  return (
    <>
    <div className='Container'>
      <div className='card'>
        <div className='Profilepic'>
          <img className='Me' src={Meicon} alt="" />          
        </div>

        <div className='MyName'>
          <h2>Cristián Javier Ferreira Pérez.</h2>
        </div>

        <div className='Carrera'>
          <h3>Desarrollador <span className='SpanFront'>Front-end</span></h3>
          <p>Santiago de Chile, Ñuñoa.</p>
        </div>

        <div className='SocialMedia'>
          <a href="https://www.linkedin.com/in/cristi%C3%A1n-ferreira-664241227/" target="_blank" rel="noopener noreferrer">
            <img src={lnk} alt="" />
            </a>
          <a href="https://t.me/Cferreirap" target="_blank" rel="noopener noreferrer">
            <img src={tlg} alt="" />
            </a>     
        </div>


      </div>

    </div>
    </>   
  )
}

export default Home