<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>
     <h1> Colegio Rosa de los Andes</h1>
      

    </v-system-bar>

    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-4"
        color="grey-lighten-4"
      >
        <v-avatar class="mb-4" size="64">
  <v-img
    src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    alt="Foto de perfil"
    cover
  ></v-img>
</v-avatar>

<div class="font-weight-medium text-pink-darken-3">
  Manuel Gomez
</div>

      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="data  in links"
          :key="data.icono"
          :prepend-icon="data.icono"
          :title="data.titulo"
          :to="data.enlace"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
          
            cols="12"
          >
            <v-card>
              <v-list lines="two">
                <v-list-subheader :title="card"></v-list-subheader>
                          <router-view />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const cards = ['Today', 'Yesterday']
  const links = [
    {
        icono : "mdi-inbox-arrow-down",
        titulo : "Matriculas",
        enlace : "/dashboard/matriculas"
    },
     {
        icono : "mdi-account-multiple-plus",
        titulo : "Estudiante",
        enlace : "/dashboard/Estudiante"
    },
    {
        icono : "mdi-account-box",
        titulo : "Docente",
        enlace : "/dashboard/Docente"
    },
     {
        icono : "mdi-format-horizontal-align-left",
        titulo : "Salida",
        enlace : "/"
    },

    
  ]

  const drawer = ref(null)
</script>
<style scoped>
.v-application {
  background-color: #fce4ec; /* fondo rosado claro */
}

/* Barra superior */
.v-system-bar {
  background-color: #f8bbd0;
  color: #880e4f;
}

/* Menú lateral */
.v-navigation-drawer {
  background-color: #fce4ec;
  color: #880e4f;
}

/* Elementos del menú */
.v-list-item {
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: #f8bbd0;
  color: white;
}

/* Tarjetas y contenedor principal */
.v-card {
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(233, 30, 99, 0.2);
  border: 1px solid #f8bbd0;
}

.v-main {
  background-color: #fff0f6;
  min-height: 100vh;
}
</style>

