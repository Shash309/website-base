// src/Hero.jsx
import React, { useEffect, useState } from "react";
import "./styles.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
  "/images/slide7.jpg",
  "/images/slide8.jpg",
];

const Hero = ({ scrollToSection }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱ change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* ✅ Background slideshow */}
      <div className="background-slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={index === current ? "active" : ""}
          />
        ))}
        <div className="slideshow-overlay"></div>
      </div>

      {/* ✅ Foreground content */}
      <div className="hero-content">
        <h2>
          Quality you can <span>sense</span>. <br />
          A guarantee you can <span>trust</span>.
        </h2>
        <p>
          We provide disciplined, reliable and comprehensive security solutions
          tailored to your organization&apos;s needs.
        </p>
        <div className="btn-group">
          <button
            className="btn primary"
            onClick={() => scrollToSection("contact")}
          >
            Request a Proposal
          </button>
          <button
            className="btn outline"
            onClick={() => scrollToSection("clients")}
          >
            Our Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
