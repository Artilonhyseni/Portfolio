import React from "react";
import "./Contactform.css";

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Wanna know more?</h2>
      <div className="contact-content">
        <div className="contact-form">
          <h3>Contact me</h3>
          <form>
            <input type="text" placeholder="Your name (required)" required />
            <input type="email" placeholder="Your email (required" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-social">
          <h3>Follow me on SoME</h3>
          <p>
            Follow me on Instagram and connect with me on Linkedin for more!
          </p>
          <div className="social-icons">
            <a href="#linkedin">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>

            <a href="#instagram">
              <img src="instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
