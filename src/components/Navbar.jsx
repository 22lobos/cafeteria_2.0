import { NavLink } from "react-router-dom";
import "../App.css";


export default function Navbar() {
  return (
    <header className="sc-header">
      {/* Franja azul con solo el logo a la izquierda */}
      <div className="sc-top">
        <div className="sc-top-inner">
          <img
            src="/img/logo192.png"
            alt="Cafetería Santa Carla"
            className="sc-logo"
          />
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="sc-tabs">
        <ul className="sc-tabs-list">
          <li><NavLink end to="/" className="sc-tab">Inicio</NavLink></li>
          <li><NavLink to="/menu" className="sc-tab">Menú</NavLink></li>
          <li><NavLink to="/nosotros" className="sc-tab">Nosotros</NavLink></li>
          <li><NavLink to="/contacto" className="sc-tab">Contacto</NavLink></li>
          <li><NavLink to="/blog" className="sc-tab">Blog</NavLink></li>
          <li><NavLink to="/ofertas" className="sc-tab">Ofertas</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
