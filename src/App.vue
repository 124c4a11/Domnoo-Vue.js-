<template>
  <div id="app">
    <app-header></app-header>
    <app-carousel></app-carousel>
    <app-products></app-products>
    <app-call-us></app-call-us>
    <app-newsletter></app-newsletter>
    <app-footer></app-footer>
  </div>
</template>

<script>
import '@/assets/style.css'

import appHeader from '@/components/Header.vue'
import appFooter from '@/components/Footer.vue'
import appCarousel from '@/components/Carousel.vue'
import appProducts from '@/components/Products.vue'
import appCallUs from '@/components/CallUs'
import appNewsletter from '@/components/Newsletter.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter,
    appCarousel,
    appProducts,
    appCallUs,
    appNewsletter
  }
}
</script>
