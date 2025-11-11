// src/service/contactoService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v2.0/contactoCafeteria';

export const contactoService = {
    enviarFormulario: async (datos) => {
        try {
            const datosParaEnviar = {
                nombre: datos.nombre,
                apellido: datos.apellido,
                correo: datos.correo,
                telefono: datos.telefono,
                mensaje: datos.mensaje
            };
            
            const response = await axios.post(API_URL, datosParaEnviar);
            return response.data;
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            if (error.response) {
                throw new Error(`Error ${error.response.status}: ${error.response.data}`);
            } else {
                throw new Error('No se pudo conectar con el servidor.');
            }
        }
    }
};