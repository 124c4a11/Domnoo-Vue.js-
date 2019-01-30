<template>
  <section class="products">
    <div class="container">
      <h2 class="products__title">Menu</h2>

      <div class="products__buttons">
        <md-button
          v-for="(btn, ndx) in buttons"
          :key="ndx"
          :class="btn.active ? 'md-raised' : '' "
          @click="changeProducts(btn.name)"
        >{{ btn.name }}</md-button>
      </div>

      <div class="products__list">
        <md-card
          v-for="product in products"
          :key="product.id"
          v-show="product.type === activeProduct"
          class="products__list-item"
        >
          <md-card-media md-ratio="16:9">
            <img :src="require(`../assets/images/products/${product.img}`)" :alt="product.name">
          </md-card-media>

          <md-card-header>
            <h3 class="md-title">{{ product.name }}</h3>
            <div class="md-subhead">$ {{ product.price }}</div>
          </md-card-header>

          <md-card-content>{{ product.desc }}</md-card-content>
        </md-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      activeProduct: 'pizza',

      buttons: [
        { name: 'pizza', active: true },
        { name: 'burgers', active: false },
        { name: 'salat', active: false },
        { name: 'dessert', active: false },
      ]
    }
  },

  methods: {
    changeProducts (productType) {
      if (this.activeProduct === productType) return;

      this.buttons.forEach((btn) => {
        if (btn.name === productType) {
          btn.active = true
          this.activeProduct = productType
        } else {
          btn.active = false
        }
      })
    }
  },

  created () {
    this.$http.get('products.json')
      .then((responce) => responce.json())
      .then((data) => {
        const products = []

        for (let key in data) {
          products.push({
            id: key,
            ...data[key]
          })
        }

        this.products = products
      })
  }
}
</script>
