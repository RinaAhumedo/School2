<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://educacionbogota.edu.co/portal_institucional/sites/default/files/2019-06/N1_338.jpg',
    'https://diariocorreo.pe/resizer/SKpG-pD4Nwn6LusVR2s88Gzi9oo=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AZDGBKRGCBE2PDG7BGBLQTK7SE.jpg',
    'https://diariocorreo.pe/resizer/CbmUZA7ilOGyI_kWdB8CFUU5jA8=/600x337/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/JCT4Y4MHC5BYZP3C6I2I4WE7AY.jpg',
  ]
</script>