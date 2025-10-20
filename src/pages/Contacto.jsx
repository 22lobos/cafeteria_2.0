export default function Contacto() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Aquí manejaremos el envío del formulario en React 🙂");
  };

  return (
    <main className="contenedor2">
      <section className="formulario-contacto">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input id="apellido" required />

          <label htmlFor="correo">Correo electrónico:</label>
          <input id="correo" type="email" required />

          <label htmlFor="telefono">Número de Teléfono:</label>
          <input id="telefono" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" rows="5" required />

          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>
    </main>
  );
}
