// src/components/contact/Contact.jsx
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/{your_form_id}', {
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
    <div className="whole-home">
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
