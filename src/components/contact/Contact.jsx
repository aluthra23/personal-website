// src/components/contact/Contact.jsx
import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './contact.css';
import {motion} from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/xgegbaow', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setFormStatus('Thank you for your message!');
      form.reset();
    } else {
      setFormStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <motion.div 
      className="whole-home"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar /> */}
      <div className="contact-page">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" placeholder='Your Name' required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Contact;
