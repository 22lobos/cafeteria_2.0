import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { CartProvider } from "./cart/CartContext"; // ← export con NOMBRE
import CartButton from "./components/CartButton";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Ofertas from "./pages/Ofertas";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Categorias from "./pages/Categorias";
import Checkout from "./pages/Checkout";
import CompraOk from "./pages/CompraOk";
import CompraFail from "./pages/CompraFail";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="container mt-3 text-end">
        <CartButton />
      </div>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/compra-ok" element={<CompraOk />} />
          <Route path="/compra-fail" element={<CompraFail />} />
          <Route path="*" element={<div className="container py-4"><h1>404</h1><p>Página no encontrada 😢</p></div>} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
