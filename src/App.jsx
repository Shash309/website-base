import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const images = [
    "/images/gaurds.jpg",
    "/images/award by vijay electricals.jpg",
    "/images/fire fighting drills.jpg",
    "/images/gaurds2.jpg",
    "/images/general drills.jpg",
    "/images/general duty drills.jpg",
    "/images/Image0041.jpg",
    "/images/Image0044.jpg",
  ].map((p) => process.env.PUBLIC_URL + p);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    // TODO: send fd to backend API
    setStatus("✅ Inquiry sent. We will respond shortly.");
    e.target.reset();
    setTimeout(() => setStatus(""), 5000);
  }

  return (
    <div className="app">
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
      <section className="hero container">
        <div className="hero-content">
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
      <section id="about" className="container grid two">
        <div>
          <h3>Introduction</h3>
          <p>
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
      <section id="strengths" className="container">
        <h3>Our Strengths</h3>
        <ul className="tick cols">
          <li>Undiluted quality at every stage</li>
          <li>Centrally coordinated monitoring system</li>
          <li>Dedicated and disciplined personnel</li>
          <li>
            Own training academy for ex-soldiers and recruits covering security,
            vigilance, fire safety, and management
          </li>
        </ul>
      </section>

      {/* COMPLIANCE */}
      <section className="container">
        <h3>Compliance and Legal Details</h3>
        <ul className="tick cols">
          <li>License Number: ___________</li>
          <li>Registration Number: ___________</li>
          <li>GST Number: ___________</li>
        </ul>
      </section>

      {/* SOP */}
      <section id="sop" className="section muted">
        <div className="container">
          <h3>Standard Operating Procedures (SOP)</h3>
          <ul className="tick cols">
            <li>Strict adherence to management’s instructions</li>
            <li>24/7 gate security and hourly patrols</li>
            <li>Entry/exit regulation with proper registers</li>
            <li>Prevention of unauthorized access or encroachment</li>
            <li>
              Assistance in investigations & emergencies (fire, theft,
              accidents)
            </li>
            <li>
              Professional conduct — no smoking, drinking, or misconduct during
              duty
            </li>
            <li>
              Thorough checking of vehicles, materials, and garbage leaving
              premises
            </li>
            <li>
              Trained personnel in fire safety, vigilance, and incident response
            </li>
          </ul>
          <p className="note">📑 Detailed SOPs available on request.</p>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="container grid two">
        <div>
          <h3>Training & Development</h3>
          <p>We believe that quality security begins with quality training.</p>
          <ul className="tick">
            <li>
              In-house training facilities covering Security, Vigilance, Fire
              Fighting, and Management
            </li>
            <li>Experienced personnel with ongoing guidance</li>
            <li>
              MoU with OSSIM (Orion School of Security & Intelligence
              Management), New Delhi & Mohali
            </li>
          </ul>
          <p className="badge">
            👮 Well-trained, disciplined, and reliable — ready for every
            challenge.
          </p>
        </div>
        <div className="card">
          <h4>Contingency & Emergency Plan (Highlights)</h4>
          <ul className="tick">
            <li>Updated contacts for police, hospitals, ambulance, fire brigade</li>
            <li>Immediate reporting and swift on-ground action</li>
            <li>
              Knowledge of emergency exits, alarm activation & crowd control
            </li>
            <li>
              Lockdown procedures during strikes; enhanced security at
              vulnerable points
            </li>
            <li>
              Mock drills, fire exit displays, and top-management evacuation
              safety
            </li>
          </ul>
        </div>
      </section>

      {/* TERMS */}
      <section id="contingency" className="section">
        <div className="container">
          <h3>Terms of Engagement</h3>
          <ul className="tick">
            <li>Clients must implement technical advice from field officers</li>
            <li>100% dedicated effort with assistance in crime investigations</li>
            <li>Extra security can be deployed on demand</li>
            <li>Agency not liable for accidents due to acts of nature</li>
            <li>Payments must be cleared by the 7th of each month</li>
            <li>Responsibility ends upon contract conclusion</li>
          </ul>
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
