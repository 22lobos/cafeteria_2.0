// src/pages/Blog.jsx
export default function Blog() {
  return (
    <div className="container py-4">
      <h1>Blog</h1>
      <p>Historias y novedades de la cafetería.</p>
    </div>
  );
}

// 👇 estos ya NO son default
export function Categorias() {
  return (
    <div className="container py-4">
      <h1>Categorías</h1>
    </div>
  );
}

export function Ofertas() {
  return (
    <div className="container py-4">
      <h1>Ofertas</h1>
    </div>
  );
}

export function Checkout() {
  return (
    <div className="container py-4">
      <h1>Checkout</h1>
    </div>
  );
}
