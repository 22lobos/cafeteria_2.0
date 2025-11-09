import { useCart } from "../cart/CartContext";

export default function CartDrawer() {
  const { items, inc, dec, setQty, remove, clear, fmt, total } = useCart();

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartDrawer">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
      </div>

      <div className="offcanvas-body">
        {items.length === 0 && <p>Tu carrito está vacío.</p>}

        {items.map(it => (
          <div key={it.id} className="d-flex align-items-center border-bottom py-2 gap-2">
            {it.image && <img src={it.image} alt="" width={56} height={56} style={{objectFit:"cover"}} />}
            <div className="flex-grow-1">
              <div className="fw-medium">{it.name}</div>
              <div className="text-muted small">{fmt(it.price)}</div>
              <div className="d-flex align-items-center gap-2 mt-1">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => dec(it.id)}>-</button>
                <input
                  className="form-control form-control-sm"
                  style={{ width: 64, textAlign: "center" }}
                  value={it.qty}
                  onChange={(e) => setQty(it.id, e.target.value)}
                />
                <button className="btn btn-sm btn-outline-secondary" onClick={() => inc(it.id)}>+</button>
                <button className="btn btn-sm btn-outline-danger ms-auto" onClick={() => remove(it.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="offcanvas-footer p-3 border-top">
        <div className="d-flex justify-content-between mb-2">
          <strong>Total</strong>
          <strong>{fmt(total)}</strong>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary w-50" onClick={clear}>Vaciar</button>
          <a className="btn btn-primary w-50" href="/checkout" data-bs-dismiss="offcanvas">Pagar</a>
        </div>
      </div>
    </div>
  );
}
