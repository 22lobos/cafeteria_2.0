// src/lib/db.js
const KEY = "cafeteria_productos";

// Rutas reales según tus archivos en public/img/menu
const IMG = {
  espresso: "/img/menu/expresoo.png",      // tu archivo tiene "expresso.png"
  americano: "/img/menu/Americano.png",     // no existe -> placeholder
  cappuccino: "/img/menu/cappuccino.png",    // tu archivo es "cappucino.png"
  latte: "/img/menu/Latte.png",
  mocaccino: "/img/menu/index_img.png",     // no existe -> placeholder
  flatwhite: "/img/menu/index_img.png",     // no existe -> placeholder

  tarta: "/img/menu/tarta-chocolate.png",
  cheesecake: "/img/menu/index_img.png",    // no existe -> placeholder
  brownie: "/img/menu/index_img.png",
  carrot: "/img/menu/index_img.png",
  kuchen: "/img/menu/index_img.png",

  jamonqueso: "/img/menu/index_img.png",
  avepalta: "/img/menu/index_img.png",
  vegetariano: "/img/menu/index_img.png",
  barrosluco: "/img/menu/index_img.png",
};

const seed = [
  // === CAFÉS ===
  { id: 1, nombre: "Espresso",   desc: "Shot intenso, aroma profundo.",       precio: 2000, categoria: "cafes",      oferta: false, img: IMG.espresso },
  { id: 2, nombre: "Americano",  desc: "Espresso alargado con agua caliente.",precio: 2200, categoria: "cafes",      oferta: false, img: IMG.americano },
  { id: 3, nombre: "Cappuccino", desc: "Espresso, leche y espuma.",           precio: 2800, categoria: "cafes",      oferta: true,  img: IMG.cappuccino },
  { id: 4, nombre: "Latte",      desc: "Suave y cremoso.",                    precio: 2900, categoria: "cafes",      oferta: false, img: IMG.latte },
  { id: 5, nombre: "Mocaccino",  desc: "Latte con chocolate.",                precio: 3100, categoria: "cafes",      oferta: true,  img: IMG.mocaccino },
  { id: 6, nombre: "Flat White", desc: "Doble espresso con microespuma.",     precio: 3200, categoria: "cafes",      oferta: false, img: IMG.flatwhite },

  // === PASTELES ===
  { id: 7,  nombre: "Tarta de Chocolate",     desc: "Cacao intenso y crema suave.",       precio: 3200, categoria: "pasteles",   oferta: true,  img: IMG.tarta },
  { id: 8,  nombre: "Cheesecake Frambuesa",   desc: "Base crocante y coulis natural.",   precio: 3500, categoria: "pasteles",   oferta: false, img: IMG.cheesecake },
  { id: 9,  nombre: "Brownie",                desc: "Húmedo, con trozos de chocolate.",  precio: 2500, categoria: "pasteles",   oferta: false, img: IMG.brownie },
  { id: 10, nombre: "Carrot Cake",            desc: "Zanahoria, especias y frosting.",   precio: 3100, categoria: "pasteles",   oferta: true,  img: IMG.carrot },
  { id: 11, nombre: "Kuchen Manzana",         desc: "Clásico del sur, canela suave.",    precio: 2900, categoria: "pasteles",   oferta: false, img: IMG.kuchen },

  // === SANDWICHES ===
  { id: 12, nombre: "Sandwich Jamón & Queso", desc: "Pan artesanal y queso fundido.",     precio: 3300, categoria: "sandwiches", oferta: true,  img: IMG.jamonqueso },
  { id: 13, nombre: "Ave Palta",              desc: "Pollo desmenuzado con palta.",       precio: 3600, categoria: "sandwiches", oferta: false, img: IMG.avepalta },
  { id: 14, nombre: "Vegetariano",            desc: "Hummus, tomate, rúcula y oliva.",    precio: 3400, categoria: "sandwiches", oferta: false, img: IMG.vegetariano },
  { id: 15, nombre: "Barros Luco",            desc: "Lomo y queso caliente.",             precio: 3900, categoria: "sandwiches", oferta: true,  img: IMG.barrosluco },
];

// Overrides de imagen por id (migra lo que tengas guardado en localStorage)
const IMG_OVERRIDES = {
  1: IMG.espresso,
  2: IMG.americano,
  3: IMG.cappuccino,
  4: IMG.latte,
  5: IMG.mocaccino,
  6: IMG.flatwhite,
  7: IMG.tarta,
  8: IMG.cheesecake,
  9: IMG.brownie,
  10: IMG.carrot,
  11: IMG.kuchen,
  12: IMG.jamonqueso,
  13: IMG.avepalta,
  14: IMG.vegetariano,
  15: IMG.barrosluco,
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);

    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }

    let data = JSON.parse(raw);
    let changed = false;

    // Normaliza y aplica overrides de imagen
    data = data.map(p => {
      const q = { categoria: "cafes", oferta: false, ...p };
      if (q.categoria === undefined) { q.categoria = "cafes"; changed = true; }
      if (q.oferta === undefined)    { q.oferta = false;      changed = true; }
      if (IMG_OVERRIDES[q.id] && q.img !== IMG_OVERRIDES[q.id]) {
        q.img = IMG_OVERRIDES[q.id];
        changed = true;
      }
      return q;
    });

    // Agrega nuevos del seed si faltan
    const idsActuales = new Set(data.map(p => p.id));
    const faltantes = seed.filter(s => !idsActuales.has(s.id));
    if (faltantes.length) { data = [...data, ...faltantes]; changed = true; }

    if (changed) localStorage.setItem(KEY, JSON.stringify(data));
    return data;
  } catch {
    localStorage.removeItem(KEY);
    localStorage.setItem(KEY, JSON.stringify(seed));
    return seed;
  }
}

function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export function list()                { return load(); }
export function ofertas()             { return load().filter(p => p.oferta === true); }
export function byCategoria(cat)      { return load().filter(p => p.categoria === cat); }
export function create(prod){
  const data = load();
  const id = Math.max(0, ...data.map(p => p.id)) + 1;
  const nuevo = { id, oferta:false, categoria:"cafes", ...prod };
  save([...data, nuevo]);
  return nuevo;
}
export function update(id, cambios)   { save(load().map(p => p.id === Number(id) ? { ...p, ...cambios } : p)); }
export function remove(id)            { save(load().filter(p => p.id !== Number(id))); }
