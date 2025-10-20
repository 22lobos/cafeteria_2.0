export default function Home() {
  return (
    <>
      <section className="hero-seccion">
        <div className="hero-left">
          <img src="/img/index_img.png" alt="Taza de café" className="cafe-img" />
        </div>
        <div className="hero-right">
          <img src="/img/titulo.png" alt="Logo Cafetería Santa Carla" className="logo-img" />
          <p className="descripcion">
            El mejor café de la ciudad, preparado con pasión desde 2021.
            Vive la experiencia Santa Carla.
          </p>
          <div className="sizes">
            <span>☕ Pequeño</span>
            <span>☕ Mediano</span>
            <span>☕ Grande</span>
          </div>
        </div>
      </section>
    </>
  );
}
