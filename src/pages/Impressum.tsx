export default function Impressum() {
  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card">
          <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Impressum</h1>
          
          <h3 style={{ marginBottom: '0.5rem' }}>Angaben gemäß § 5 TMG</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            IBV Engelhardt - Industrie Beratung & Vertrieb<br/>
            Alexander Kurz<br/>
            Neue Straße 24<br/>
            34355 Staufenberg - OT Lutterberg<br/>
            Deutschland
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>Kontakt</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Telefon: +49 1520 421 3687<br/>
            E-Mail: ibv-engelhardt@outlook.de
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>Umsatzsteuer-ID</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
            DE XXX XXX XXX {/* Hier bitte echte USt-ID eintragen, falls vorhanden */}
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
