// src/lib/db.js
const KEY = "cafeteria_productos";

const seed = [
  { id: 1, nombre: "Espresso",  desc: "Shot intenso, aroma profundo.", precio: 2000, categoria: "cafes",      oferta: false },
  { id: 2, nombre: "Americano", desc: "Espresso alargado con agua.",   precio: 2200, categoria: "cafes",      oferta: false },
  { id: 3, nombre: "Cappuccino",desc: "Espresso, leche y espuma.",     precio: 2800, categoria: "cafes",      oferta: true  },
  { id: 4, nombre: "Latte",     desc: "Suave y cremoso.",              precio: 2900, categoria: "cafes",      oferta: false },
  { id: 5, nombre: "Mocaccino", desc: "Latte con chocolate.",          precio: 3100, categoria: "cafes",      oferta: true  },
  { id: 6, nombre: "Flat White",desc: "Doble espresso con microespuma.",precio: 3200,categoria: "cafes",      oferta: false },
  // agrega más categorías si quieres (pasteleria, te, etc.)
];

function load() {
  const raw = localStorage.getItem(KEY);
  const data = raw ? JSON.parse(raw) : seed;
  // normaliza por si faltan campos en datos antiguos
  return data.map(p => ({ oferta: false, ...p }));
}

function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export function list() { return load(); }
export function byCategoria(cat) { return load().filter(p => p.categoria === cat); }
export function ofertas() { return load().filter(p => p.oferta === true); }
// (APIs CRUD si las necesitas luego)
export function create(prod){ const d=load(); const id=Math.max(0,...d.map(x=>x.id))+1; const n={id,oferta:false,...prod}; save([...d,n]); return n; }
export function update(id,c){ save(load().map(p=>p.id===Number(id)?{...p,...c}:p)); }
export function remove(id){ save(load().filter(p=>p.id!==Number(id))); }
