// src/pages/Ofertas.jsx
import { ofertas } from "../lib/db";

export default function Ofertas() {
  const items = ofertas();
  return (
    <div className="container py-4">
      <h2 className="h4 mb-3">Ofertas</h2>
      <div className="row g-3">
        {items.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <span className="badge bg-success mb-2">Oferta</span>
                <p className="card-text">{p.desc}</p>
                <p className="fw-bold">${p.precio.toLocaleString("es-CL")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <div className="alert alert-info mt-3">No hay ofertas por ahora.</div>}
    </div>
  );
}
