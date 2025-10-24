const KEY = "cafeteria_productos";

const seed = [
  { id: 1, nombre: "Espresso",   desc: "Shot intenso, aroma profundo.",      precio: 2000, categoria: "cafes", oferta: false , img: "/img/menu/expresoo" },
  { id: 2, nombre: "Americano",  desc: "Espresso alargado con agua caliente.",precio: 2200, categoria: "cafes", oferta: false },
  { id: 3, nombre: "Cappuccino", desc: "Espresso, leche y espuma.",          precio: 2800, categoria: "cafes", oferta: true  },
  { id: 4, nombre: "Latte",      desc: "Suave y cremoso.",                   precio: 2900, categoria: "cafes", oferta: false },
  { id: 5, nombre: "Mocaccino",  desc: "Latte con chocolate.",               precio: 3100, categoria: "cafes", oferta: true  },
  { id: 6, nombre: "Flat White", desc: "Doble espresso con microespuma.",    precio: 3200, categoria: "cafes", oferta: false },
];

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    let data = JSON.parse(raw);
    let changed = false;
    data = data.map(p => {
      const q = { categoria: "cafes", oferta: false, ...p };
      if (q.categoria === undefined) { q.categoria = "cafes"; changed = true; }
      if (q.oferta === undefined)    { q.oferta = false;      changed = true; }
      return q;
    });
    if (changed) localStorage.setItem(KEY, JSON.stringify(data));
    return data;
  } catch (e) {
    // si el JSON está corrupto, resetea
    localStorage.removeItem(KEY);
    localStorage.setItem(KEY, JSON.stringify(seed));
    return seed;
  }
}

function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export function list()      { return load(); }
export function ofertas()   { return load().filter(p => p.oferta === true); }
export function byCategoria(cat) { return load().filter(p => p.categoria === cat); }
export function create(prod){
  const data = load();
  const id = Math.max(0, ...data.map(p => p.id)) + 1;
  const nuevo = { id, oferta:false, categoria:"cafes", ...prod };
  save([...data, nuevo]);
  return nuevo;
}
export function update(id, cambios){
  save(load().map(p => p.id === Number(id) ? { ...p, ...cambios } : p));
}
export function remove(id){
  save(load().filter(p => p.id !== Number(id)));
}
