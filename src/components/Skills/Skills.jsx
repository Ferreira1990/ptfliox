import React from 'react'
import '../Skills/Skills.css'

const Skills = () => {
    return (
        <>
            <div id='Skillz' className='Skillsbox'>
                <h2>Mis Habilidades (My Skills).</h2>
                <div className='Skills'>
                    <img src="src\assets\htmlicon.png" alt="HTML Icon" />
                    <img src="src\assets\cssicon.png" alt="CSS Icon" />
                    <img className='Gitcstm' src="src\assets\giticon.png" alt="Github Icon" />
                    <img src="src\assets\Bootstrapicon.png" alt="Bootstrap Icon" />
                    <img src="src\assets\Jsicon.png" alt="Jscript icon" />
                    <img src="src\assets\Reacticon.png" alt="React Icon" />
                    <img src="src\assets\Tailwindicon.png" alt="Tailwind icon" />
                    <img src="src\assets\Muiicon.png" alt="Material UI icon" />
                </div>
            </div>
        </>
    )
}

export default Skills