import React from 'react'
import '../Skills/Skills.css'

import htmlimg from '../../assets/htmlicon.png'
import css from '../../assets/cssicon.png'
import Git from '../../assets/giticon.png'
import Boots from '../../assets/Bootstrapicon.png'
import Jsicon from '../../assets/Jsicon.png'
import Reacticon from '../../assets/Reacticon.png'
import TWind from '../../assets/Tailwindicon.png'
import Muicon from '../../assets/Muiicon.png'


const Skills = () => {
    return (
        <>
            <div id='Skillz' className='Skillsbox'>
                <h2>Mis Habilidades (My Skills).</h2>
                <div className='Skills'>
                    <img src={htmlimg} alt="HTML Icon" />
                    <img src={css} alt="CSS Icon" />
                    <img className='Gitcstm' src={Git} alt="Github Icon" />
                    <img src={Boots} alt="Bootstrap Icon" />
                    <img src={Jsicon} alt="Jscript icon" />
                    <img src={Reacticon} alt="React Icon" />
                    <img src={TWind} alt="Tailwind icon" />
                    <img src={Muicon} alt="Material UI icon" />
                </div>
            </div>
        </>
    )
}

export default Skills