<template>
  <section class="call-us">
    <div class="container">
      <h2 class="call-us__title" v-scroll-reveal.reset="{ delay: 200, scarle: 2 }">Hungry ?</h2>

      <div
        v-scroll-reveal.reset="{
          delay: 300,
          afterReveal: () =>  stepsAnim = true
        }"
        class="call-us__steps"
      >
        <app-steps v-if="stepsAnim"></app-steps>
      </div>

      <div class="call-us__contacts" v-scroll-reveal.reset="{ delay: 600, scarle: 2 }">
        <span>Give us a call</span> 45577-67679
      </div>
    </div>
  </section>
</template>

<script>
import appSteps from './steps.vue'

export default {
  data () {
    return {
      stepsAnim: false
    }
  },

  components: {
    appSteps
  }
}
</script>
