<template>
  <header class="page-header">
    <div class="container clear">
      <div class="page-header__logo">
        <img :src="logo" alt="domnoo">
      </div>
      <div class="page-header__nav">
        <button class="menu-toggle"><img :src="hamburgerIcon" alt=""></button>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png'
import hamburgerIcon from '@/assets/images/menu.png'

export default {
  data () {
    return {
      logo,
      hamburgerIcon
    }
  }
}
</script>
