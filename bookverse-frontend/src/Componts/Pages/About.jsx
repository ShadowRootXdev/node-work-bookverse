import React from 'react';
import '../Styles/Aboutus.css';

export default function AboutUs() {
  return (
    <div className="about">

    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-tagline">Empowering Readers. Supporting Authors. Simplifying Book Management.</p>

      <section className="about-section">
        <p>
          At <strong>BookVerse</strong>, we believe that every story deserves a shelf and every author a voice. Our platform was built
          with one goal in mind: to provide an intuitive, reliable, and efficient space for managing books—whether you're an avid
          reader, a passionate author, or a bookstore admin.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-list">
          <li><span>🔒</span> <strong>Secure & Seamless:</strong> Built on robust technology with JWT authentication to keep your data safe.</li>
          <li><span>📚</span> <strong>Easy Book Management:</strong> Add, update, or delete books with just a few clicks.</li>
          <li><span>🎯</span> <strong>User-Friendly Dashboard:</strong> Stay in control with a clean, responsive dashboard experience.</li>
          <li><span>🌍</span> <strong>Community-Driven:</strong> Our mission is to connect readers and authors in one seamless ecosystem.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions, suggestions, or feedback? We’d love to hear from you. Head over to our <a href="/contact">Contact Us</a> page
          or drop us an email.
        </p>
      </section>
    </div>
    </div>
  );
}
