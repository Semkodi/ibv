import { useCart } from '../context/CartContext';
import { Trash2, Mail } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const handleSendRequest = () => {
    let body = "Guten Tag,\n\nich interessiere mich für folgende Artikel und bitte um ein tagesaktuelles Preisangebot:\n\n";
    items.forEach(item => {
      body += `- ${item.quantity}x ${item.title}\n`;
    });
    body += "\nBitte teilen Sie mir auch die voraussichtlichen Lieferzeiten mit.\n\nMit freundlichen Grüßen\n[Ihr Name/Firma]";
    
    // Mailto link generieren
    const mailto = `mailto:ibv-engelhardt@outlook.de?subject=Preisanfrage für elektronische Komponenten&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ihr Anfrage-Korb</h1>
        
        {items.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Ihr Anfrage-Korb ist aktuell leer.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '0' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {items.map(item => (
                  <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '8px', padding: '5px' }}>
                      <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '0.8rem', fontWeight: 500 }}>{item.title}</h4>
                      <div className="qty-selector" style={{ display: 'inline-flex' }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <input type="number" readOnly value={item.quantity} />
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} style={{ color: '#d32f2f', padding: '0.5rem', transition: 'transform 0.2s' }} className="hover:scale-110">
                      <Trash2 size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={clearCart} className="btn btn-secondary">Korb leeren</button>
              <button onClick={handleSendRequest} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                <Mail size={20} /> Preisanfrage via E-Mail senden
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
