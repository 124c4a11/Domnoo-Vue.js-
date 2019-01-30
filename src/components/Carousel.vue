<template>
  <carousel
    :per-page="1"
    :loop="true"
    :paginationEnabled="false"
  >
    <slide v-for="(slide, ndx) in slides" :key="ndx">
      <div
        :style="{'background-image': `url(${slide.bg})`}"
        class="slide"
      >
        <div class="container slide__content">
          <div class="slide__text">{{ slide.text }}</div>
          <div class="slide__image">
            <img :src="slide.img" alt="">
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import slideBg from '@/assets/images/slide_bck.jpg'
import slideBg2 from '@/assets/images/slide_bck2.jpg'
import pizzaOne from '@/assets/images/pizza_one.png'
import pizzaThree from '@/assets/images/pizza_three.png'

import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },

  data () {
    return {
      slides: [
        {
          text: '20% OFF ON ALL PIZZAS',
          bg: slideBg,
          img: pizzaOne
        },
        {
          text: 'BUY TWO, GET ONE FREE',
          bg: slideBg2,
          img: pizzaThree
        },
      ]
    }
  }
}
</script>
