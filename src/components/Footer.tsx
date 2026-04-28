import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/logo.png" alt="IBV Engelhardt Logo" style={{ height: '50px', marginBottom: '1rem', objectFit: 'contain' }} />
            <h3 className="footer-title">IBV Engelhardt</h3>
            <p className="footer-desc">
              Industrie Beratung & Vertrieb. Ein verlässlicher Partner in der Welt der Elektronik, Automation und Beratung.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle">Kontakt</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <div>
                  <strong>Alexander Kurz</strong><br/>
                  Neue Straße 24<br/>
                  34355 Staufenberg - OT Lutterberg<br/>
                  Deutschland
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>+49 1520 421 3687</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>ibv-engelhardt@outlook.de</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', paddingTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
            <Link to="/impressum" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Impressum</Link>
            <Link to="/datenschutz" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Datenschutz</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} IBV Engelhardt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
