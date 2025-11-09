import { byCategoria } from "../lib/db";
import { useCart } from "../cart/CartContext";

function Seccion({ titulo, cat }) {
  const { add } = useCart();
  const productos = byCategoria(cat);
  if (!productos.length) return null;

  return (
    <>
      <h3 className="mt-4 mb-3">{titulo}</h3>
      <div className="row">
        {productos.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card h-100 shadow-sm">
              {p.img && (
                <img src={p.img} className="card-img-top" alt={p.nombre}
                     style={{ height: 180, objectFit: "cover" }} />
              )}
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                {p.oferta && <span className="badge bg-success mb-2">Oferta -20%</span>}
                <p className="card-text">{p.desc}</p>
                <p className="fw-bold text-primary">
                  {p.oferta ? (
                    <>
                      <span className="text-decoration-line-through text-muted me-2">
                        {(p.precio * 1.2).toLocaleString("es-CL")}
                      </span>
                      <span>${p.precio.toLocaleString("es-CL")}</span>
                    </>
                  ) : <>${p.precio.toLocaleString("es-CL")}</>}
                </p>
                <button className="btn btn-outline-primary w-100" onClick={() => add(p, 1)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <div className="container mt-4">
      <h2 className="h4 mb-4 text-center">Menú</h2>
      <Seccion titulo="Cafés" cat="cafes" />
      <Seccion titulo="Pasteles" cat="pasteles" />
      <Seccion titulo="Sandwiches" cat="sandwiches" />
    </div>
  );
}
