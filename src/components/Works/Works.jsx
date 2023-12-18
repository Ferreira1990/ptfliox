import React from 'react'
import '../Works/Works.css'
import Camila from '../../assets/Camila.jpg'
import Pizza from '../../assets/Pizza.jpg'
import Form from '../../assets/Logform.jpg'
import lionel from '../../assets/LUA.jpg'

const Works = () => {
  return (
    <div id='Workz' className='containerworks'>
        <div >
            <h2 className='tittle'>Trabajos (Experience)</h2>
        </div>

        <div className='Glasscontainer'>

            
<div className='workscontainerx'>
    <a href="https://logincolor.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img className='camilawork' src={Form} alt="Form Work" />
    </a>
    
    <div></div>
    <div className='orderskills'><button className='experience'>HTML</button> <button className='experience'>CSS</button>
    <button className='experience'>Pshop</button>
    <button className='experience'>Javascript</button> <button className='experience'>Tailwind</button>
    </div>
    <button className='experience'>React + VITE</button>
</div>

<div className='workscontainerx'>
    <a href="https://agencialua.cl/" target="_blank" rel="noopener noreferrer">
    <img className='camilawork' src={lionel} alt="Form Work" />
    </a>
    
    <div></div>
    <div className='orderskills'><button className='experience'>HTML</button> <button className='experience'>CSS</button>
    <button className='experience'>Pshop</button>
    <button className='experience'>Javascript</button> <button className='experience'>Bootstrap</button>
    </div>
    <button className='experience'>React + VITE</button>
</div>

            <div className='workscontainerx'>
                <a href="https://ferreira1990.github.io/camilacuevas/" target="_blank" rel="noopener noreferrer">
                <img className='camilawork' src={Camila} alt="CamilawebPage" />
                </a>
                
                <div></div>
                <div className='orderskills'><button className='experience'>HTML</button> <button className='experience'>CSS</button> <button className='experience'>Javascript</button> <button className='experience'>Bootstrap</button></div>
            </div>
        </div>

        <div className='Glasscontainer'>

<div className='workscontainerx'>
    <a href="https://pizzalatam.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img className='camilawork' src={Pizza} alt="Pizzaswebpage" />
    </a>
    
    <div></div>
    <div className='orderskills'><button className='experience'>HTML</button> <button className='experience'>CSS</button> <button className='experience'>Javascript</button> <button className='experience'>API</button></div>
    <button className='experience'>React + VITE</button>
</div>

</div>
    </div>
  )
}

export default Works