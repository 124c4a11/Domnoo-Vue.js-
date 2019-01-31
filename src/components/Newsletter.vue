<template>
  <section class="newsletter">
    <div class="container">
      <h2 class="newsletter__title">Join to our newsletter</h2>

      <form @submit.prevent="submitHandler" class="newsletter__form">
        <input v-model="email" class="newsletter__form-field" type="text">
        <button class="newsletter__form-btn">Subscribe</button>
      </form>

      <div class="newsletter__error-label">{{ error }}</div>
      <div class="newsletter__success-label">{{ success }}</div>

      <div class="newsletter__desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse dolorem, non et magnam numquam. Rem ratione modi quisquam, minima facilis ut sequi in expedita.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      error: '',
      success: ''
    }
  },

  methods: {
    validate (email) {
      const valid = {
        isValid: true,
        validMsg: ''
      }

      if (!/.+@.+/.test(email)) {
        valid.isValid = false
        valid.validMsg = 'Enter a valid email'
      }

      if (email === '') {
        valid.isValid = false
        valid.validMsg = 'Its empty'
      }

      return valid
    },

    submitHandler () {
      const { isValid, validMsg } = this.validate(this.email)

      if (isValid) {
        this.error = ''
        this.addEmail(this.email)
      }
      else {
        this.error = validMsg
      }
    },

    addEmail (email) {
      this.$http.get(`users.json?orderBy="email"&&equalTo="${email}"`)
        .then((responce) => {
            if (!Object.getOwnPropertyNames(responce.data).length) {
              this.$http.post('users.json', { email: this.email })
                .then(() => this.success = 'Thank you')
            }
            else {
              this.success = 'Already on the list'
            }
        })

      this.clearSuccess()
    },

    clearSuccess() {
      setTimeout(() => {
        this.email = ''
        this.success = ''
      }, 3000)
    }
  }
}
</script>
