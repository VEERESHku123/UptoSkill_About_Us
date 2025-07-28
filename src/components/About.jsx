import React, { useEffect, useState } from 'react'
import './About.css';
import { useNavigate , Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from "../assets/logo.png"; 
import heroSectionImg from "../assets/hero_section_img.jpg";

const About = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>

      {/*--------------------------------------- Header Section-------------------------------*/}

      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            onClick={() => navigate('/')}
          />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/programs" onClick={toggleMenu}>Programs</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}

      {/* ----------------------- Hero Section ---------------------------  */}
      
       <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Master Tech Skills with Peer-to-Peer Learning
          </h1>
          <p className="hero-description">
            Join a global community to learn cutting-edge tech skills, collaborate
            on real-world projects, and accelerate your career with expert
            mentorship.
          </p>
            <div className="hero-buttons">
              <button className="explore-btn" onClick={() => navigate('')}>
                Explore Talent
              </button>
              <button className="hire-btn" onClick={() => navigate('')}>
                Hire as Student
              </button>
              <button className="try-btn" onClick={() => navigate('')}>
                 Try Free
              </button>
            </div>
        </div>
        <div className="hero-image">
          <img
            src={heroSectionImg}
            alt="Education"
            className="hero-img"
          />
        </div>
    </section>

    {/* ----------------------- About Section ---------------------------  */}

    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Uptoskills</h2>
        <p className="section-description">
          Uptoskills is a vibrant peer-to-peer learning platform that empowers tech enthusiasts to acquire 
          practical skills through collaboration, mentorship, and real-world projects. Our mission is to make 
          tech education accessible and impactful for all.
        </p>

        <div className="grid-two">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To democratize tech education by offering collaborative, hands-on learning experiences that 
              empower learners from all backgrounds to succeed in the tech industry.
            </p>
          </div>
          <div className="card">
            <h3>Our Approach</h3>
            <p>
              We champion learning by doing, connecting learners with peers and mentors to tackle real-world 
              challenges and build skills that drive career success.
            </p>
          </div>
        </div>

        <div className="section-block">
          <h3>Our Vision</h3>
          <p>
            We envision a world where tech education is universally accessible, fostering innovation and 
            empowering individuals to shape the future of technology.
          </p>
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1007.jpg?semt=ais_hybrid&w=740"
            alt="Teamwork"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Our Values</h3>
          <div className="grid-three">
            <div className="card">
              <h4>Collaboration</h4>
              <p>We unite diverse perspectives to solve complex challenges through collective learning.</p>
            </div>
            <div className="card">
              <h4>Innovation</h4>
              <p>We inspire creative thinking to push the boundaries of technology and learning.</p>
            </div>
            <div className="card">
              <h4>Inclusivity</h4>
              <p>We foster an inclusive environment where everyone can thrive and succeed.</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/diversity-concept-illustration_114360-1410.jpg?semt=ais_hybrid&w=740"
            alt="Diversity"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Our Journey</h3>
          <p>
            From a small community of learners to a global platform, Uptoskills has grown to impact thousands 
            of lives through tech education. Here’s a glimpse of our milestones.
          </p>
          <div className="milestones">
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2018: Founded</h4>
                <p>Uptoskills was born to connect tech enthusiasts for peer learning.</p>
              </div>
            </div>
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2020: First Hackathon</h4>
                <p>Hosted our inaugural hackathon, fostering innovation and collaboration.</p>
              </div>
            </div>
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2025: Global Reach</h4>
                <p>Expanded to support learners in over 50 countries.</p>
              </div>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/milestone-concept-illustration_114360-2786.jpg?semt=ais_hybrid&w=740"
            alt="Milestones"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Community Impact</h3>
          <p>
            Our community has transformed thousands of lives by enabling learners to secure tech jobs, contribute 
            to open-source projects, and innovate in their fields.
          </p>
          <div className="grid-two">
            <div className="card testimonials">
              <h4>Testimonials</h4>
              <div className="quote">
                <p>"Uptoskills gave me the skills and confidence to become a developer."</p>
                <small>- Jane Doe, Software Engineer</small>
              </div>
              <div className="quote">
                <p>"The hands-on projects prepared me for real-world challenges."</p>
                <small>- John Smith, Data Analyst</small>
              </div>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/successful-team-concept-illustration_114360-3966.jpg?semt=ais_hybrid&w=740"
                alt="Community Success"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ----------------------- Program Section ---------------------------  */}

     <section className="programs-section">
      <div className="container center">
        <h2 className="title">Our Programs</h2>
        <p className="subtitle">
          Discover our expertly designed programs to master in-demand tech skills through hands-on projects 
          and mentorship from industry professionals.
        </p>
        <div className="program-grid">
          {[
            {
              title: 'Web Development',
              img: 'https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8033.jpg?semt=ais_hybrid&w=740',
              desc: 'Build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React and Vue.'
            },
            {
              title: 'Data Science',
              img: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8051.jpg?semt=ais_hybrid&w=740',
              desc: 'Master data analysis, machine learning, and visualization with Python, R, and tools like TensorFlow.'
            },
            {
              title: 'Cloud Computing',
              img: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-2269.jpg?semt=ais_hybrid&w=740',
              desc: 'Gain expertise in cloud platforms like AWS, Azure, and GCP through real-world projects.'
            },
            {
              title: 'Cybersecurity',
              img: 'https://img.freepik.com/free-vector/cyber-security-concept_114360-2294.jpg?semt=ais_hybrid&w=740',
              desc: 'Learn to secure systems and networks with hands-on training in ethical hacking and security protocols.'
            }
          ].map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.img} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ----------------------- Footer Section ---------------------------  */}

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
    
    </div>
  )
}

export default About