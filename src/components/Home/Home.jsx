import React from 'react'
import '../Home/Home.css'

const Home = () => {
  return (
    <>
    <div className='Container'>
      <div className='card'>
        <div className='Profilepic'>
          <img className='Me' src="src\assets\me.png" alt="" />          
        </div>

        <div className='MyName'>
          <h2>Cristián Javier Ferreira Pérez.</h2>
        </div>

        <div className='Carrera'>
          <h3>Desarrollador <span className='SpanFront'>Front-end</span></h3>
          <p>Santiago de Chile, Ñuñoa.</p>
        </div>

        <div className='SocialMedia'>
          <a href="https://www.linkedin.com/in/cristi%C3%A1n-ferreira-664241227/" target="_blank" rel="noopener noreferrer"><img src="src\assets\linkedin.png" alt="" /></a>
          <a href="https://t.me/Cferreirap" target="_blank" rel="noopener noreferrer"><img src="src\assets\Telegram.png" alt="" /></a>     
        </div>


      </div>

    </div>
    </>   
  )
}

export default Home