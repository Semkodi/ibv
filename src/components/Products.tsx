import { ShoppingCart, ExternalLink } from 'lucide-react';
import './Products.css';

const MOCK_PRODUCTS = [
  {
    "title": "HN-MODUL SIM5-1212S – Kompaktmodul für elektronische Anwendung NEW",
    "price": "EUR 6,90",
    "imageUrl": "https://i.ebayimg.com/images/g/fbIAAeSwoDtppqOk/s-l300.webp"
  },
  {
    "title": "Balluff BOS01JK Lichttaster mit Hintergrundausblendung BOS 5K-PU-LH12-S75",
    "price": "EUR 60,00",
    "imageUrl": "https://i.ebayimg.com/images/g/pDQAAeSwhw1pfH0A/s-l300.webp"
  },
  {
    "title": "Ferrit‑Ringkern R10/6/4L – Material K2006 – AL‑Wert 850 nH ±25%",
    "price": "EUR 1,11",
    "imageUrl": "https://i.ebayimg.com/images/g/mMkAAeSwnedpiNLn/s-l300.webp"
  },
  {
    "title": "Ferrit Ringkern R12,5/7,5/5 K6000 • AL 3050 nH • MnZn",
    "price": "EUR 1,20",
    "imageUrl": "https://i.ebayimg.com/images/g/T0AAAeSwUBRpXWW-/s-l300.webp"
  },
  {
    "title": "Ferrit-Ringkern R24/14/8L – µi = 75 – AL = 60 nH",
    "price": "EUR 2,50",
    "imageUrl": "https://i.ebayimg.com/images/g/v~YAAeSwmNdpc2EQ/s-l300.webp"
  },
  {
    "title": "Kaschke RDS10-1,8 Ringkerndrossel – 2×1,8 mH, stromkompensiert",
    "price": "EUR 6,90",
    "imageUrl": "https://i.ebayimg.com/images/g/rPUAAeSwdSBpbeoc/s-l300.webp"
  },
  {
    "title": "Ferrit‑Ringkern R10/6/4L – Material K4000 – AL‑Wert 2450 nH",
    "price": "EUR 1,11",
    "imageUrl": "https://i.ebayimg.com/images/g/gbwAAeSwDI1piNUT/s-l300.webp"
  },
  {
    "title": "Universelle Halterungen BAM009U Haltewinkel",
    "price": "EUR 5,00",
    "imageUrl": "https://i.ebayimg.com/images/g/P30AAeSwn2hpcK~6/s-l300.webp"
  }
];

export default function Products() {
  return (
    <section id="products" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge animate-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingCart size={14} />
            Shop & Produkte
          </div>
          <h2 className="animate-up delay-1">Direkt aus dem Sortiment</h2>
          <p className="animate-up delay-2" style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
            Entdecken Sie unsere hochwertigen elektronischen Bauteile. Alle Produkte sind bequem über unseren Partner-Shop auf eBay erhältlich.
          </p>
        </div>

        <div className="products-grid">
          {MOCK_PRODUCTS.map((prod, index) => (
            <div className="glass-card product-card animate-up" style={{ animationDelay: `${(index % 4) * 150}ms` }} key={index}>
              <div className="product-image-container">
                <img src={prod.imageUrl} alt={prod.title} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{prod.title}</h3>
                <div className="product-footer">
                  <span className="product-price">{prod.price}</span>
                  <a href="https://www.ebay.de/str/ibvengelhardt?_trksid=p4429486.m3561.l161211" target="_blank" rel="noopener noreferrer" className="btn btn-secondary product-btn">
                    Details <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
