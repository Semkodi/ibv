import { Lock, User } from 'lucide-react';
import '../components/PortalLogin.css';

export default function AdminLogin() {
  return (
    <section className="section" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass login-container animate-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Admin Portal</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Bitte loggen Sie sich ein, um Änderungen am Bestand vorzunehmen.
            </p>
          </div>
          
          <form className="login-form">
            <div className="input-group">
              <span className="input-icon"><User size={18} /></span>
              <input type="text" placeholder="Benutzername" required />
            </div>
            <div className="input-group">
              <span className="input-icon"><Lock size={18} /></span>
              <input type="password" placeholder="Passwort" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
              Einloggen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
