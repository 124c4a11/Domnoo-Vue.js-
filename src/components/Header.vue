<template>
  <header class="page-header">
    <div class="container clear">
      <div class="page-header__logo">
        <img :src="logo" alt="domnoo">
      </div>
      <div class="page-header__nav">
        <button
          @click="showNavigation = !showNavigation"
          class="menu-toggle"
        ><img :src="hamburgerIcon" alt=""></button>
      </div>
    </div>
    <md-drawer
      :md-active.sync="showNavigation"
      class="side-drawer md-right"
    ></md-drawer>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png'
import hamburgerIcon from '@/assets/images/menu.png'

export default {
  data () {
    return {
      showNavigation: false,
      logo,
      hamburgerIcon
    }
  }
}
</script>
