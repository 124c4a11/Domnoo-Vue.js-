<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import '@/assets/style.css'

import appHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>
