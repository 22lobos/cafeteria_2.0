import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const KEY = "cart_v1";
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  });

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const add = (prod, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === prod.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { id: prod.id, name: prod.nombre, price: prod.precio, image: prod.img, qty }];
    });
  };

  const inc    = id => setItems(p => p.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it));
  const dec    = id => setItems(p => p.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it));
  const setQty = (id, v) => setItems(p => p.map(it => it.id === id ? { ...it, qty: Math.max(1, parseInt(v,10)||1) } : it));
  const remove = id => setItems(p => p.filter(it => it.id !== id));
  const clear  = () => setItems([]);

  const count = items.reduce((a,b) => a + b.qty, 0);
  const total = items.reduce((a,b) => a + b.price * b.qty, 0);
  const fmt   = n => n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const value = useMemo(() => ({ items, add, inc, dec, setQty, remove, clear, count, total, fmt }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
