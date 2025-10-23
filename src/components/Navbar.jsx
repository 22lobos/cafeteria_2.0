import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sc-header">
      {/* franja azul superior con logo/marca si quieres */}
      <div className="sc-brand container">
        <div className="sc-mark">Cafetería <strong>Santa Carla</strong> • Since 2021</div>
      </div>

      {/* barra de navegación azul */}
      <nav className="sc-nav">
        <div className="container sc-nav-inner">
          <NavLink end to="/" className="sc-link">Inicio</NavLink>
          <NavLink to="/menu" className="sc-link">Menú</NavLink>
          <NavLink to="/nosotros" className="sc-link">Nosotros</NavLink>
          <NavLink to="/contacto" className="sc-link">Contacto</NavLink>
          <NavLink to="/blog" className="sc-link">Blog</NavLink>
          <NavLink to="/ofertas" className="sc-link">Ofertas</NavLink>
        </div>
      </nav>
    </header>
  );
}
