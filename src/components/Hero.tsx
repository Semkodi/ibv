import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="animate-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <img src="/logo.png" alt="IBV Engelhardt Logo" style={{ maxWidth: '450px', width: '100%', objectFit: 'contain' }} />
          </div>
          <h1 className="hero-title animate-up delay-1">
            Industrieberatung & Vertrieb <br/>
            <span className="text-gradient">neu definiert.</span>
          </h1>
          <p className="hero-subtitle animate-up delay-2">
            Wir verbinden technische Exzellenz mit strategischem Vertrieb. 
            Ihr zuverlässiger Partner für spezielle Industriekomponenten, Sensorik und umfassende Beratung.
          </p>
          <div className="hero-actions animate-up delay-2">
            <a href="#services" className="btn btn-primary">
              Leistungen entdecken
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
