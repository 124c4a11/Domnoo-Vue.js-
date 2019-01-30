<template>
  <div id="app">
    <app-header></app-header>
    <app-carousel></app-carousel>
    <app-footer></app-footer>
  </div>
</template>

<script>
import '@/assets/style.css'

import appHeader from '@/components/Header.vue'
import appFooter from '@/components/Footer.vue'
import appCarousel from '@/components/Carousel.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter,
    appCarousel
  }
}
</script>
