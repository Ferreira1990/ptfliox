import React, { useState } from 'react';
import './Aboutme.css';

const Aboutme = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getParagraphText = () => {
    if (language === 'es') {
      return (
        "Desarrollador Front-end, amante del diseño, la creatividad y la tecnología. Me encuentro en constante aprendizaje y manteniéndome al tanto de las últimas tendencias en diseño, desarrollo web y tecnología, para poder mejorar continuamente en mis capacidades y trabajos. También, amo trabajar en conjunto y soy capaz de hacerlo eficazmente e ir aportando grandes ideas para poder realizar un gran trabajo."
      );
    } else {
      return (
        "Front-end Developer, passionate about design, creativity, and technology. I am consistently engaged in learning and staying abreast of the latest trends in design, web development, and technology to continuously enhance my skills and output. Moreover, I thrive in collaborative environments, effectively contributing impactful ideas to deliver exceptional results."
      );
    }
  };

  return (
    <>
      <div id='Aboutmex' className='Aboutmebox'>
        <h2>Acerca de mí (About me)</h2>
        <p>{getParagraphText()}</p>
        <div className='Buttonbox'>
        <button onClick={() => handleLanguageChange('es')}>Español</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        </div>
      </div>
    </>
  );
};

export default Aboutme;