<template>
  <v-footer class="social-footer" padless>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h3 class="text-pink-darken-2 font-weight-bold mb-3">
            Síguenos en nuestras redes
          </h3>

          <!-- Íconos de redes sociales -->
          <div class="social-icons mb-4">
            <!-- Instagram -->
            <v-btn
              icon
              href="https://www.instagram.com/colegiorosadelosandes"
              target="_blank"
              class="mx-2"
            >
              <v-icon color="#E1306C" size="30">mdi-instagram</v-icon>
            </v-btn>

            <!-- Facebook -->
            <v-btn
              icon
              href="https://www.facebook.com/colegiorosadelosandes"
              target="_blank"
              class="mx-2"
            >
              <v-icon color="#3b5998" size="30">mdi-facebook</v-icon>
            </v-btn>

            <!-- WhatsApp -->
            <v-btn
              icon
              href="https://wa.me/573001234567"
              target="_blank"
              class="mx-2"
            >
              <v-icon color="#25D366" size="30">mdi-whatsapp</v-icon>
            </v-btn>

            <!-- Teléfono -->
            <v-btn icon href="tel:+573001234567" class="mx-2">
              <v-icon color="#ad1457" size="30">mdi-phone</v-icon>
            </v-btn>
          </div>

          <!-- Información de contacto -->
          <div class="contact-info text-grey-darken-1">
            <p>
              📍 Calle 25 #15-30, Montería, Córdoba — Colombia<br />
              📞 Tel: +57 300 123 4567 | ✉️ info@rosadelosandes.edu.co
            </p>
          </div>

          <!-- Derechos reservados -->
          <p class="mt-4 text-grey-darken-1 mb-0">
            © 2025 <strong>Colegio Rosa de los Andes</strong> — Todos los derechos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.social-footer {
  background-color: #fff0f6;
  border-top: 2px solid #f8bbd0;
  padding-top: 20px;
  padding-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icons .v-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icons .v-btn:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 10px rgba(233, 30, 99, 0.2);
}

.contact-info {
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
