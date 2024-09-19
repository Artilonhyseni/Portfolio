import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    e.target.reset();
  };

  return (
    <section id="contact">
      <section className="contact-section">
        <h2 className="contact-title">Wanna know more?</h2>
        <div className="contact-content">
          <div className="contact-form">
            <h3>Contact me</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your name (required)" required />
              <input
                type="email"
                placeholder="Your email (required)"
                required
              />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </form>
            {submitted && (
              <p className="success-message">
                Your message was successfully sent!
              </p>
            )}
          </div>

          <div className="contact-social">
            <h3>Follow me on SoME</h3>
            <p>
              Follow me on Instagram and connect with me on Linkedin for more!
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/artilon-hyseni-02b076278/">
                <img src="icons/pngwing.com (13).png" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/artismediia/">
                <img src="icons/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
