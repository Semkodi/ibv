import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductsPage.css';

const MOCK_PRODUCTS = [
  { id: "p1", title: "HN-MODUL SIM5-1212S – Kompaktmodul für elektronische Anwendung NEW", imageUrl: "https://i.ebayimg.com/images/g/fbIAAeSwoDtppqOk/s-l300.webp" },
  { id: "p2", title: "Balluff BOS01JK Lichttaster mit Hintergrundausblendung BOS 5K-PU-LH12-S75", imageUrl: "https://i.ebayimg.com/images/g/pDQAAeSwhw1pfH0A/s-l300.webp" },
  { id: "p3", title: "Ferrit‑Ringkern R10/6/4L – Material K2006 – AL‑Wert 850 nH ±25%", imageUrl: "https://i.ebayimg.com/images/g/mMkAAeSwnedpiNLn/s-l300.webp" },
  { id: "p4", title: "Ferrit Ringkern R12,5/7,5/5 K6000 • AL 3050 nH • MnZn", imageUrl: "https://i.ebayimg.com/images/g/T0AAAeSwUBRpXWW-/s-l300.webp" },
  { id: "p5", title: "Ferrit-Ringkern R24/14/8L – µi = 75 – AL = 60 nH", imageUrl: "https://i.ebayimg.com/images/g/v~YAAeSwmNdpc2EQ/s-l300.webp" },
  { id: "p6", title: "Kaschke RDS10-1,8 Ringkerndrossel – 2×1,8 mH, stromkompensiert", imageUrl: "https://i.ebayimg.com/images/g/rPUAAeSwdSBpbeoc/s-l300.webp" },
  { id: "p7", title: "Ferrit‑Ringkern R10/6/4L – Material K4000 – AL‑Wert 2450 nH", imageUrl: "https://i.ebayimg.com/images/g/gbwAAeSwDI1piNUT/s-l300.webp" },
  { id: "p8", title: "Universelle Halterungen BAM009U Haltewinkel", imageUrl: "https://i.ebayimg.com/images/g/P30AAeSwn2hpcK~6/s-l300.webp" }
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQtyChange = (id: string, val: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, val) }));
  };

  const currentQty = (id: string) => quantities[id] || 1;

  const handleAdd = (prod: any) => {
    const qty = currentQty(prod.id);
    addItem({ id: prod.id, title: prod.title, imageUrl: prod.imageUrl, quantity: qty });
    // Optional: Könnte hier ein visuelles Feedback setzen
  };

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Produkte & Komponenten</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '750px', lineHeight: 1.6 }}>
            Durchsuchen Sie unser Inventar an Ferriten, Ringkernen und Spulen. Fügen Sie die gewünschten Artikel zur Anfrageliste hinzu, und wir senden Ihnen umgehend ein tagesaktuelles Preisangebot zu.
          </p>
        </div>

        <div className="products-list">
          {MOCK_PRODUCTS.map((prod, index) => (
            <div key={prod.id} className="product-list-item glass-card animate-up" style={{ animationDelay: `${(index % 5) * 100}ms` }}>
              <div className="product-list-image">
                <img src={prod.imageUrl} alt={prod.title} />
              </div>
              <div className="product-list-content">
                <h3 className="product-list-title">{prod.title}</h3>
                <span className="product-badge">Preis auf Anfrage</span>
              </div>
              <div className="product-list-actions">
                <div className="qty-selector">
                  <button onClick={() => handleQtyChange(prod.id, currentQty(prod.id) - 1)}>-</button>
                  <input type="number" readOnly value={currentQty(prod.id)} />
                  <button onClick={() => handleQtyChange(prod.id, currentQty(prod.id) + 1)}>+</button>
                </div>
                <button onClick={() => handleAdd(prod)} className="btn btn-primary" style={{ padding: '0.6rem 1rem' }}>
                  <ShoppingCart size={16} /> Hinzufügen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
