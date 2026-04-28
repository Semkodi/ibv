import { Lock, User } from 'lucide-react';
import './PortalLogin.css';

export default function PortalLogin() {
  return (
    <section id="portal" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass login-container animate-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Kundenportal</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Bitte loggen Sie sich ein, um auf Ihre Projekte und Daten zuzugreifen.
            </p>
          </div>
          
          <form className="login-form">
            <div className="input-group">
              <span className="input-icon"><User size={18} /></span>
              <input type="text" placeholder="Benutzername oder E-Mail" required />
            </div>
            <div className="input-group">
              <span className="input-icon"><Lock size={18} /></span>
              <input type="password" placeholder="Passwort" required />
            </div>
            <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                <input type="checkbox" /> Angemeldet bleiben
              </label>
              <a href="#" style={{ color: 'var(--color-primary)' }}>Passwort vergessen?</a>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
              Einloggen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
