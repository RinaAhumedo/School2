<template>
  <v-container class="py-10 institucional-container">
    <!-- Título principal -->
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold text-pink-darken-2">
          Colegio Rosa de los Andes
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          “Formando corazones, cultivando mentes y construyendo futuros con amor y conocimiento.”
        </p>
      </v-col>
    </v-row>

    <!-- Sección Misión, Visión y Valores -->
    <v-row justify="center" align="stretch" class="mb-12">
      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6 card-style d-flex flex-column justify-space-between">
          <v-card-title class="text-h5 text-pink-darken-2 font-weight-bold">
            Misión
          </v-card-title>
          <v-card-text>
            Nuestra misión es ofrecer una educación integral que inspire el amor
            por el aprendizaje, fomente la creatividad y fortalezca los valores
            humanos. Buscamos formar estudiantes felices, críticos y solidarios,
            capaces de transformar su entorno con empatía, respeto y responsabilidad
            social, guiados siempre por el corazón y el conocimiento.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6 card-style d-flex flex-column justify-space-between">
          <v-card-title class="text-h5 text-pink-darken-2 font-weight-bold">
            Visión
          </v-card-title>
          <v-card-text>
            En el año 2030, el Colegio Rosa de los Andes será reconocido como una
            institución líder en educación emocional y académica, donde la innovación,
            la inclusión y el bienestar sean el eje central de la formación. Soñamos
            con una comunidad educativa que promueva el respeto, la sostenibilidad
            y el compromiso por un mundo más humano y consciente.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6 card-style d-flex flex-column justify-space-between">
          <v-card-title class="text-h5 text-pink-darken-2 font-weight-bold">
            Valores Institucionales
          </v-card-title>
          <v-card-text>
            <ul>
              <li><strong>Amor:</strong> esencia que impulsa cada acción educativa y humana.</li>
              <li><strong>Respeto:</strong> valoración de la diversidad, el diálogo y la empatía.</li>
              <li><strong>Responsabilidad:</strong> compromiso con uno mismo, con los demás y con el entorno.</li>
              <li><strong>Solidaridad:</strong> apoyo mutuo y cooperación como base del crecimiento colectivo.</li>
              <li><strong>Innovación:</strong> búsqueda constante de nuevas formas de aprender, enseñar y crear.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Línea de tiempo horizontal -->
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-h4 text-center font-weight-bold text-pink-darken-2 mb-8">
          Nuestra Historia
        </h2>

        <div class="timeline-horizontal">
          <div
            v-for="(evento, i) in eventos"
            :key="i"
            class="timeline-item"
            :style="{ borderColor: evento.color }"
          >
            <div class="timeline-dot" :style="{ backgroundColor: evento.color }"></div>
            <div class="timeline-content">
              <h3 class="text-pink-darken-2">{{ evento.anio }}</h3>
              <h4>{{ evento.titulo }}</h4>
              <p>{{ evento.descripcion }}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InstitucionalApp",
  data() {
    return {
      eventos: [
        {
          anio: "2005",
          titulo: "Fundación del Colegio",
          descripcion:
            "Nace el Colegio Rosa de los Andes con el propósito de ofrecer una educación integral, inspirada en el amor y la inclusión.",
          color: "#f48fb1",
        },
        {
          anio: "2010",
          titulo: "Ampliación de Infraestructura",
          descripcion:
            "Se construyen nuevos espacios educativos, incluyendo laboratorios, biblioteca y zonas recreativas.",
          color: "#ec407a",
        },
        {
          anio: "2016",
          titulo: "Premio a la Excelencia Educativa",
          descripcion:
            "El colegio recibe reconocimiento por sus proyectos pedagógicos enfocados en el desarrollo emocional.",
          color: "#e91e63",
        },
        {
          anio: "2023",
          titulo: "Transformación Digital",
          descripcion:
            "Se implementan herramientas tecnológicas para potenciar el aprendizaje virtual y presencial.",
          color: "#ad1457",
        },
      ],
    };
  },
};
</script>

<style scoped>
.institucional-container {
  background-color: #fff0f6;
  border-radius: 20px;
}

/* Tarjetas uniformes */
.card-style {
  background-color: white;
  border: 2px solid #f8bbd0;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}
.card-style:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(233, 30, 99, 0.2);
}

ul {
  padding-left: 1rem;
  text-align: left;
}
ul li {
  margin-bottom: 6px;
}

/* Línea de tiempo horizontal */
.timeline-horizontal {
  display: flex;
  overflow-x: auto;
  gap: 40px;
  padding: 20px;
  scrollbar-width: thin;
}

.timeline-horizontal::-webkit-scrollbar {
  height: 8px;
}
.timeline-horizontal::-webkit-scrollbar-thumb {
  background-color: #f48fb1;
  border-radius: 4px;
}

.timeline-item {
  min-width: 250px;
  border-top: 4px solid;
  padding-top: 20px;
  position: relative;
  transition: transform 0.3s ease;
}
.timeline-item:hover {
  transform: scale(1.05);
}
.timeline-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -11px;
  left: 0;
}
.timeline-content {
  margin-left: 10px;
}
.timeline-content h3 {
  font-weight: bold;
  margin-bottom: 5px;
}
.timeline-content h4 {
  font-size: 1.1rem;
  color: #ad1457;
  margin-bottom: 5px;
}
.timeline-content p {
  color: #555;
  font-size: 0.9rem;
}


</style>
