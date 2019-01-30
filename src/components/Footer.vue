<template>
  <footer class="page-footer">
    <div class="container">
      <img :src="logo" alt="domnoo">
      <div class="page-footer__contact">
        <div>Call us</div>
        <div>45577-67679</div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/images/logo.png'

export default {
  data () {
    return {
      logo
    }
  }
}
</script>
