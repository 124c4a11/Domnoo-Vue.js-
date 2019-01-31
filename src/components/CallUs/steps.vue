<template>
  <div class="steps">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div class="steps__icon steps__icon_phone" delay="0" left="100"></div>
    </transition>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div class="steps__icon steps__icon_plus" delay="100" left="310">+</div>
    </transition>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div class="steps__icon steps__icon_delivery" delay="200" left="480"></div>
    </transition>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div class="steps__icon steps__icon_plus" delay="300" left="750">=</div>
    </transition>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <div class="steps__icon steps__icon_pizza" delay="400" left="900"></div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter (el) {
      el.style.left = '-200px'
      el.style.opacity = 0
    },

    enter (el, done) {
      const
        delay = parseInt(el.getAttribute('delay')),
        left = parseInt(el.getAttribute('left'))

      Velocity(
        el,
        { opacity: 1, left },
        { delay, duration: 500, complete: done }
      )
    }
  }
}
</script>
