import { useState } from "react";
import { contactoService } from "../service/contactoservice";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false); 
  const [mensajeExito, setMensajeExito] = useState(""); 

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

    if (!form.correo.trim()) {
      errs.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      errs.correo = "El correo no tiene un formato válido.";
    }

    if (!form.telefono.trim()) {
      errs.telefono = "El número de teléfono es obligatorio.";
    } else if (!/^\d{8,}$/.test(form.telefono)) {
      errs.telefono = "Debe contener solo números y tener al menos 8 dígitos.";
    }

    if (!form.mensaje.trim()) errs.mensaje = "El mensaje no puede estar vacío.";

    return errs;
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const val = validar();
    setErrores(val);

    if (Object.keys(val).length === 0) {
      setEnviando(true);
      setMensajeExito("");
      
      try {
       
        await contactoService.enviarFormulario(form);
        
        // MENSAJE DE ÉXITO
        setMensajeExito(`✅ Mensaje enviado correctamente. Gracias ${form.nombre}!`);
        
        // LIMPIA EL FORMULARIO
        setForm({ 
          nombre: "", 
          apellido: "", 
          correo: "", 
          telefono: "", 
          mensaje: "" 
        });
        
      } catch (error) {
        setMensajeExito(" Error al enviar el mensaje. Por favor, intenta nuevamente.");
      } finally {
        setEnviando(false);
      }
    }
  };

  return (
    <div className="video-background-container">
      <video autoPlay muted loop className="background-video">
        <source src="/video/video-fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      <div className="video-overlay"></div>
      
      <main className="contenedor2">
        <section className="formulario-contacto">
          <h2>Formulario de Contacto</h2>
          
          {/* AÑADE ESTE MENSAJE GLOBAL */}
          {mensajeExito && (
            <div className="mensaje-exito">
              {mensajeExito}
            </div>
          )}
          
          <form onSubmit={onSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input 
              id="nombre" 
              value={form.nombre} 
              onChange={handleChange} 
              disabled={enviando}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}

            <label htmlFor="apellido">Apellido:</label>
            <input 
              id="apellido" 
              value={form.apellido} 
              onChange={handleChange} 
              disabled={enviando}
            />
            {errores.apellido && <p className="error">{errores.apellido}</p>}

            <label htmlFor="correo">Correo electrónico:</label>
            <input 
              id="correo" 
              type="email" 
              value={form.correo} 
              onChange={handleChange} 
              disabled={enviando}
            />
            {errores.correo && <p className="error">{errores.correo}</p>}

            <label htmlFor="telefono">Número de Teléfono:</label>
            <input 
              id="telefono" 
              value={form.telefono} 
              onChange={handleChange} 
              disabled={enviando}
            />
            {errores.telefono && <p className="error">{errores.telefono}</p>}

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea 
              id="mensaje" 
              rows="5" 
              value={form.mensaje} 
              onChange={handleChange} 
              disabled={enviando}
            />
            {errores.mensaje && <p className="error">{errores.mensaje}</p>}

            <button 
              type="submit" 
              className="btn" 
              disabled={enviando}
            >
              {enviando ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}