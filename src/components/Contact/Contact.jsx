import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs.sendForm('service_1pwm3lz', 'template_qgxgbbr', form.current, 'bGvdSN4Lr2q4ifxPU')
      .then((result) => {
        console.log(result.text);
        // Resetear los valores del formulario después del envío
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div id='Contact' className='Fathercontact'>
        <div className='customtexth1'><h1>Contacto (Contact) </h1></div>
        <form className='Customform' ref={form} onSubmit={sendEmail}>
          <label className='labelnamex'>Name</label>
          <input className='inputnamex' type="text" name="name" required />
          <label className='labelemailx'>Email</label>
          <input className='inputemailx' type="email" name="email" required />
          <label className='labelmessage'>Message</label>
          <textarea className='textareacustom' name="message" required />
          <input className='custombutton' type="submit" value={isSubmitting ? 'Sending...' : 'Send'} disabled={isSubmitting} />
        </form>
      </div>
    </>
  );
}

export default Contact;

