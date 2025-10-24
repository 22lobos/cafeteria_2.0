import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  // Validación básica antes de enviar
  const validar = () => {
    const errs = {};

    if (!form.nombre.trim()) errs.nombre = "El nombre es obligatorio.";
    if (!form.apellido.trim()) errs.apellido = "El apellido es obligatorio.";

    // Valida correo
    if (!form.correo.trim()) {
      errs.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      errs.correo = "El correo no tiene un formato válido.";
    }

    // Teléfono solo números y mínimo 8 dígitos
    if (!form.telefono.trim()) {
      errs.telefono = "El número de teléfono es obligatorio.";
    } else if (!/^\d{8,}$/.test(form.telefono)) {
      errs.telefono = "Debe contener solo números y tener al menos 8 dígitos.";
    }

    if (!form.mensaje.trim()) errs.mensaje = "El mensaje no puede estar vacío.";

    return errs;
  };

  // Al enviar el formulario
  const onSubmit = (e) => {
    e.preventDefault();
    const val = validar();
    setErrores(val);

    if (Object.keys(val).length === 0) {
      alert(`✅ Mensaje enviado correctamente.\nGracias ${form.nombre}!`);
      setForm({ nombre: "", apellido: "", correo: "", telefono: "", mensaje: "" });
    }
  };

  return (
    <div className="video-background-container">
      {/* Video de fondo en loop */}
      <video autoPlay muted loop className="background-video">
        <source src="/video/video-fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Overlay para mejor legibilidad */}
      <div className="video-overlay"></div>
      
      {/* Formulario sobre el video */}
      <main className="contenedor2">
        <section className="formulario-contacto">
          <h2>Formulario de Contacto</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" value={form.nombre} onChange={handleChange} />
            {errores.nombre && <p className="error">{errores.nombre}</p>}

            <label htmlFor="apellido">Apellido:</label>
            <input id="apellido" value={form.apellido} onChange={handleChange} />
            {errores.apellido && <p className="error">{errores.apellido}</p>}

            <label htmlFor="correo">Correo electrónico:</label>
            <input id="correo" type="email" value={form.correo} onChange={handleChange} />
            {errores.correo && <p className="error">{errores.correo}</p>}

            <label htmlFor="telefono">Número de Teléfono:</label>
            <input id="telefono" value={form.telefono} onChange={handleChange} />
            {errores.telefono && <p className="error">{errores.telefono}</p>}

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" rows="5" value={form.mensaje} onChange={handleChange} />
            {errores.mensaje && <p className="error">{errores.mensaje}</p>}

            <button type="submit" className="btn">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}