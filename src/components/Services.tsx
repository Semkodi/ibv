import { Cpu, ShieldCheck, Truck } from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="services-header animate-up">
          <h2 className="section-title">Unsere Spezialisierung</h2>
          <p className="section-subtitle">Starke Leistungen für Ihren industriellen Erfolg</p>
        </div>
        <div className="clean-services-grid">
          <div className="service-item-clean animate-up">
            <div className="service-icon-clean">
              <Cpu size={32} />
            </div>
            <h3 className="service-title-clean">Individuelle Beratung</h3>
            <p className="service-text-clean">
              Technisches Know-how auf höchstem Niveau. Wir unterstützen Sie bei der Auswahl der richtigen Bauteile für anspruchsvolle Elektronik.
            </p>
          </div>
          <div className="service-item-clean animate-up delay-1">
            <div className="service-icon-clean">
              <ShieldCheck size={32} />
            </div>
            <h3 className="service-title-clean">Spezialisiertes Sortiment</h3>
            <p className="service-text-clean">
              Unser Fokus liegt auf schwer beschaffbaren und hochwertigen Komponenten wie speziellen Ferriten und Ringkernen.
            </p>
          </div>
          <div className="service-item-clean animate-up delay-2">
            <div className="service-icon-clean">
              <Truck size={32} />
            </div>
            <h3 className="service-title-clean">Schnelle Distribution</h3>
            <p className="service-text-clean">
              Optimierte Lagerhaltung und direkte Versandwege garantieren Ihnen kurze Lieferzeiten ohne Umwege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
