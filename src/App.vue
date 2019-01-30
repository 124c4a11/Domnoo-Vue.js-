<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import '@/assets/style.css'

import appHeader from '@/components/Header.vue'
import appFooter from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter
  }
}
</script>
