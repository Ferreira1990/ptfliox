import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import Resume from '../../assets/cvx.pdf'

import Menuiconx from '../../assets/menuIcon.png'


const Navbar = () => {

    const [ToggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const ToggleNav = () => {
        setToggleMenu(!ToggleMenu)
    }


    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            {(ToggleMenu || screenWidth > 650) && (
                <ul className="list">
                    <a className='items' href=""><li className='items'>Home</li></a>
                    <a className='items' href="#Aboutmex"><li className='items'>About Me</li></a>
                    <a className='items' href="#Skillz"><li className='items'>Skills</li></a>
                    <a className='items' href="#Workz"><li className='items'>Works</li></a>
                    <a className='items' href="#Contact"><li className='items'>Contact</li></a>
                    <a className='items' href={Resume} target="_blank" rel="noopener noreferrer"><li className='items'>Resume/CV</li></a>
                    
                </ul>
            )}

            <button onClick={ToggleNav} className='btn'> <img src={Menuiconx} alt="Menu Icon" /> </button>
        </nav>
    );
}

export default Navbar