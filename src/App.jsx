import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.JPG",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    "/images/slide6.jpg",
    "/images/slide7.jpg",
    "/images/slide8.jpg",
  ].map((p) => process.env.PUBLIC_URL + p);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const fd = new FormData(e.target);
    // TODO: send fd to backend API
    setStatus("✅ Inquiry sent. We will respond shortly.");
    e.target.reset();
    setTimeout(() => setStatus(""), 5000);
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="nav container">
          <div className="brand">
            <img
              src={process.env.PUBLIC_URL + "/images/company logo.png"}
              alt="G. S. Security Services Logo"
              className="logo"
            />
            <h1>G. S. SECURITY SERVICES</h1>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#clients">Clients</a>
            <a href="#strengths">Strengths</a>
            <a href="#sop">SOP</a>
            <a href="#training">Training</a>
            <a href="#contingency">Contingency</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        {/* BACKGROUND SLIDESHOW */}
        <div className="background-slideshow">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className={`slide ${i === slide ? "active" : ""}`}
            />
          ))}
          <div className="slideshow-overlay"></div>
        </div>
        
        <div className="hero-content container">
          <h2>Quality you can sense. A guarantee you can trust.</h2>
          <p>
            We provide disciplined, reliable and comprehensive security
            solutions tailored to your organization's needs.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Request a Proposal
            </a>
            <a href="#clients" className="btn outline">
              Our Clients
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3>About G. S. Security Services</h3>
              <p className="lead">
                We take great pleasure in introducing ourselves as a leading
                security organization, providing comprehensive security solutions to
                Educational Institutions, Industrial Establishments, Residential &
                Shopping Complexes, Government Offices, Hotels, and more.
              </p>
              <p>
                We also undertake pre-employment investigations, specialized audits,
                and provide consultancy services. Our organization is professionally
                managed by retired senior Army officers and seasoned professionals,
                ensuring discipline, efficiency, and reliability.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🏛️</div>
                <h4>Educational Institutions</h4>
                <p>Comprehensive security for schools and universities</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏭</div>
                <h4>Industrial Establishments</h4>
                <p>Specialized security for manufacturing and industrial facilities</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏢</div>
                <h4>Commercial Complexes</h4>
                <p>Professional security for shopping centers and offices</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏨</div>
                <h4>Hotels & Hospitality</h4>
                <p>Dedicated security services for hospitality industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section muted">
        <div className="container">
          <h3>Our Valued Clients</h3>
          <p>We are proud to serve numerous prestigious clients.</p>
          <img
            src={process.env.PUBLIC_URL + "/images/our valued clients.png"}
            alt="Client logos"
          />
        </div>
      </section>

      {/* STRENGTHS */}
      <section id="strengths" className="section">
        <div className="container">
          <h3>Our Core Strengths</h3>
          <p>What sets us apart in the security industry</p>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">⭐</div>
              <h4>Undiluted Quality</h4>
              <p>Maintaining the highest standards at every stage of our operations</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">🎯</div>
              <h4>Centralized Monitoring</h4>
              <p>Centrally coordinated monitoring system for maximum efficiency</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">👮</div>
              <h4>Disciplined Personnel</h4>
              <p>Dedicated and well-trained security professionals</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">🎓</div>
              <h4>Training Academy</h4>
              <p>Own training academy for ex-soldiers and recruits covering security, vigilance, fire safety, and management</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="container">
        <h3>Compliance and Legal Details</h3>
        <ul className="tick">
          <li>License Number: ___________</li>
          <li>Registration Number: ___________</li>
          <li>GST Number: ___________</li>
        </ul>
      </section>

      {/* SOP */}
      <section id="sop" className="section muted">
        <div className="container">
          <h3>Standard Operating Procedures</h3>
          <p>Our comprehensive security protocols ensure maximum protection</p>
          <div className="sop-grid">
            <div className="sop-category">
              <div className="sop-icon">🛡️</div>
              <h4>Security Protocols</h4>
              <ul className="tick">
                <li>Strict adherence to management's instructions</li>
                <li>24/7 gate security and hourly patrols</li>
                <li>Entry/exit regulation with proper registers</li>
                <li>Prevention of unauthorized access or encroachment</li>
              </ul>
            </div>
            <div className="sop-category">
              <div className="sop-icon">🚨</div>
              <h4>Emergency Response</h4>
              <ul className="tick">
                <li>Assistance in investigations & emergencies (fire, theft, accidents)</li>
                <li>Trained personnel in fire safety, vigilance, and incident response</li>
                <li>Professional conduct — no smoking, drinking, or misconduct during duty</li>
                <li>Thorough checking of vehicles, materials, and garbage leaving premises</li>
              </ul>
            </div>
          </div>
          <div className="sop-note">
            <p>📑 Detailed SOPs available on request</p>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="section">
        <div className="container">
          <h3>Training & Development</h3>
          <p>We believe that quality security begins with quality training</p>
          <div className="training-content">
            <div className="training-main">
              <div className="training-features">
                <div className="training-feature">
                  <div className="training-icon">🏫</div>
                  <h4>In-House Training Facilities</h4>
                  <p>Comprehensive training covering Security, Vigilance, Fire Fighting, and Management</p>
                </div>
                <div className="training-feature">
                  <div className="training-icon">👥</div>
                  <h4>Experienced Personnel</h4>
                  <p>Ongoing guidance from seasoned professionals and retired Army officers</p>
                </div>
                <div className="training-feature">
                  <div className="training-icon">🤝</div>
                  <h4>Strategic Partnership</h4>
                  <p>MoU with OSSIM (Orion School of Security & Intelligence Management), New Delhi & Mohali</p>
                </div>
              </div>
              <div className="training-badge">
                <p>👮 Well-trained, disciplined, and reliable — ready for every challenge</p>
              </div>
            </div>
            <div className="contingency-card">
              <div className="contingency-header">
                <div className="contingency-icon">🚨</div>
                <h4>Contingency & Emergency Plan</h4>
              </div>
              <div className="contingency-features">
                <div className="contingency-item">
                  <span className="contingency-bullet">📞</span>
                  <span>Updated contacts for police, hospitals, ambulance, fire brigade</span>
                </div>
                <div className="contingency-item">
                  <span className="contingency-bullet">⚡</span>
                  <span>Immediate reporting and swift on-ground action</span>
                </div>
                <div className="contingency-item">
                  <span className="contingency-bullet">🚪</span>
                  <span>Knowledge of emergency exits, alarm activation & crowd control</span>
                </div>
                <div className="contingency-item">
                  <span className="contingency-bullet">🔒</span>
                  <span>Lockdown procedures during strikes; enhanced security at vulnerable points</span>
                </div>
                <div className="contingency-item">
                  <span className="contingency-bullet">🏃</span>
                  <span>Mock drills, fire exit displays, and top-management evacuation safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="contingency" className="section muted">
        <div className="container">
          <h3>Terms of Engagement</h3>
          <p>Clear and transparent terms for our professional partnership</p>
          <div className="terms-grid">
            <div className="term-card">
              <div className="term-icon">📋</div>
              <h4>Client Responsibilities</h4>
              <ul className="tick">
                <li>Clients must implement technical advice from field officers</li>
                <li>100% dedicated effort with assistance in crime investigations</li>
                <li>Extra security can be deployed on demand</li>
              </ul>
            </div>
            <div className="term-card">
              <div className="term-icon">⚖️</div>
              <h4>Legal Framework</h4>
              <ul className="tick">
                <li>Agency not liable for accidents due to acts of nature</li>
                <li>Payments must be cleared by the 7th of each month</li>
                <li>Responsibility ends upon contract conclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="container">
        <h3>Get in Touch</h3>
        <p>Tell us your requirements. Our team will respond promptly.</p>
        <form className="form card" onSubmit={handleSubmit}>
          <div className="grid two">
            <label>
              <span>Name</span>
              <input name="name" required placeholder="Your full name" />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="+91-XXXXXXXXXX" />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Share a brief about your security needs..."
            />
          </label>
          <button className="btn primary" type="submit">
            Send Inquiry
          </button>
          {status && (
            <p className="status" role="status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} G. S. SECURITY SERVICES • All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
