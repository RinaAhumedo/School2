<template>
  <v-container class="d-flex align-center justify-center fill-height login-bg">
    <v-card class="pa-8 login-card" max-width="420">
      <v-row justify="center" class="mb-6">
        <v-avatar size="90">
          <v-img
            src="https://appliquedesignz.com/image/cache/data/Skye_Badge_Skye_Logo_Paw_Patrol_Applique_Design_2002_0-800x800.jpg"
            alt="Escudo del Colegio Rosa de los Andes"
            contain
          ></v-img>
        </v-avatar>
      </v-row>

      <h2 class="text-center text-pink-darken-2 font-weight-bold mb-6">
        Colegio Rosa de los Andes
      </h2>

      <!-- ERROR DEL LOGIN -->
      <v-alert
        v-if="error"
        type="error"
        class="mb-4"
        dense
        dismissible
      >
        {{ error }}
      </v-alert>

      <v-form @submit.prevent="login">
        <v-text-field
          v-model="usuario"
          label="Usuario"
          prepend-inner-icon="mdi-account"
          outlined
          dense
          color="pink-darken-2"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="contrasena"
          label="Contraseña"
          type="password"
          prepend-inner-icon="mdi-lock"
          outlined
          dense
          color="pink-darken-2"
          class="mb-6"
        ></v-text-field>

        <v-btn
          type="submit"
          block
          color="pink-darken-2"
          size="large"
          class="text-white mb-4"
          :loading="loading"
        >
          Iniciar sesión
        </v-btn>

        <div class="text-center">
          <a href="#" class="text-pink-darken-2 text-decoration-none">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import authService from "@/services/authservice";

export default {
  name: "LoginApp",
  data() {
    return {
      usuario: "",
      contrasena: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.error = "";
      this.loading = true;

      try {
        const user = await authService.login(this.usuario, this.contrasena);

        if (user) {
          // LOGIN CORRECTO → IR AL DASHBOARD
          this.$router.push("/dashboard");
        } else {
          // LOGIN INCORRECTO
          this.error = "Usuario o contraseña incorrectos.";
        }
      } catch (e) {
        this.error = "Error de conexión con el servidor.";
      }

      this.loading = false;
    },
  },
};
</script>

<style scoped>
.login-bg {
  background: linear-gradient(135deg, #fce4ec, #f8bbd0);
  height: 100vh;
}

.login-card {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(233, 30, 99, 0.2);
  transition: all 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(233, 30, 99, 0.3);
}
</style>
