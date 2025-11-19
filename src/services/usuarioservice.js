import axios from "axios";

const API_URL = "http://localhost:4000/usuarios";

export default {
  async crearUsuario(datos) {
    return await axios.post(API_URL, datos);
  },

  async listarUsuarios() {
    return await axios.get(API_URL);
  }
};
