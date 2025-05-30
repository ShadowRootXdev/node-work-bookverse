import React, { useState } from 'react';
import '../Styles/Contact.css';
import { toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">

    <section className="contact-section">
      <div className="contact-wrapper">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have questions or feedback? Send us a message and we’ll get back to you shortly.
        </p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
            />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
          />
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> kigali/Rwanda</p>
          <p><strong>Email:</strong> inezabertrand@gmail.com</p>
          <p><strong>Phone:</strong> +250 784 281 928</p>
        </div>
      </div>
    </section>
            </div>
  );
}
