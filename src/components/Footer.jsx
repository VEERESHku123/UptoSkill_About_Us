import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Uptoskills</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Open Source</a></li>
            <li><a href="#">Hackathons</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get in Touch</h4>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Instagram" /></a>
          </div>

          <div className="newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="contact-form">
            <h4>Contact Us</h4>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button>Send Message</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Uptoskills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
