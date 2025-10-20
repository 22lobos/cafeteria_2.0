import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Blog from "./pages/Blog.jsx";
import Contacto from "./pages/Contacto.jsx";




export default function App() {
  return (
    <>
      <Header />
      <main className="container-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="contenedor-nav">
      <img src="/img/Logo Cafetería Santa Carla 2021 (1).png" alt="Logo" width="200" />
      <nav className="menu">
        <ul>
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink></li>
          <li><NavLink to="/menu" className={({isActive}) => isActive ? "active" : ""}>Menú</NavLink></li>
          <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "active" : ""}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <h3>Ubicación</h3>
      <p>Pedro Fontova 7855, Huechuraba</p>

      <h3>Horario</h3>
      <p>Lun 8:00 a 15:00 | Mar-Vie 8:00 a 21:00 | Sáb 9:00 a 21:00 | Dom 9:00 a 14:00</p>

      <h3>Redes Sociales</h3>
      <p>Facebook</p>
      <p>Derechos Reservados &copy; 2025</p>
    </footer>
  );
}

function NotFound() {
  return <h2>404 - Página no encontrada</h2>;
}
