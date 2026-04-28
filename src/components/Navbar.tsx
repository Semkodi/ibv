import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar" style={{ background: 'transparent', boxShadow: 'none' }}>
      <div className="container navbar-container">
        <Link to="/" className="logo" style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-primary)' }}>
          IBV Engelhardt
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/produkte" className="nav-link">Produkte</Link>
          
          <Link to="/anfrage" title="Zum Anfrage-Warenkorb" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: 'var(--color-primary)', marginLeft: '1rem', transition: 'transform 0.2s' }} className="hover:scale-110">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-12px',
                background: '#bd734c', color: 'white',
                fontSize: '0.7rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
