import axios from "axios";

const API_URL = "http://localhost:4000/usuarios";

export default {
  async login(username, password) {
    const { data } = await axios.get(`${API_URL}?username=${username}&password=${password}`);

    if (data.length === 1) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      return data[0];
    }

    return null;
  },

  isAuthenticated() {
    return !!localStorage.getItem("user");
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  logout() {
    localStorage.removeItem("user");
  }
};
