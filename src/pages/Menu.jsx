export default function Menu() {
  return (
    <>
      <section className="hero" aria-label="Imagen destacada">
        <p className="hero-tag">Hecho al momento, con granos seleccionados ☕</p>
      </section>

      <main className="contenedor2">
        <section className="menu-bloque" aria-labelledby="cafes">
          <h2 id="cafes">☕ Cafés</h2>
          <div className="menu-grid">
            <article className="item"><h3>Espresso</h3><p>Shot intenso, aroma profundo.</p><p className="precio">$2.000</p></article>
            <article className="item"><h3>Americano</h3><p>Espresso alargado con agua caliente.</p><p className="precio">$2.200</p></article>
            <article className="item"><h3>Cappuccino</h3><p>Espresso, leche vaporizada y espuma.</p><p className="precio">$2.800</p></article>
            <article className="item"><h3>Latte</h3><p>Suave y cremoso.</p><p className="precio">$2.900</p></article>
            <article className="item"><h3>Mocaccino</h3><p>Latte con chocolate.</p><p className="precio">$3.100</p></article>
            <article className="item"><h3>Flat White</h3><p>Doble espresso con microespuma.</p><p className="precio">$3.200</p></article>
          </div>
        </section>

        {/* … (agrega el resto de bloques igual que tu HTML) */}
      </main>
    </>
  );
}
