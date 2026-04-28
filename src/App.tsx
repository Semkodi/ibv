import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AdminLogin from './pages/AdminLogin';
import CartPage from './pages/CartPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <>
      <div className="mesh-bg">
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="mesh-grid"></div>
      </div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkte" element={<ProductsPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/anfrage" element={<CartPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
