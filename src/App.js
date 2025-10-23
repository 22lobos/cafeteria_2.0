import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Ofertas from "./pages/Ofertas";
// Las siguientes están comentadas porque aún no las estás usando
// import Nosotros from "./pages/Nosotros";
// import Contacto from "./pages/Contacto";
// import Blog from "./pages/Blog";

function NotFound() {
  return (
    <div className="container py-4">
      <h1>404</h1>
      <p>Página no encontrada 😢</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ofertas" element={<Ofertas />} />
          {/* <Route path="/nosotros" element={<Nosotros />} /> */}
          {/* <Route path="/contacto" element={<Contacto />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
