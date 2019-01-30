import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import fbConfig from './firebaseConfig'

import { MdDrawer, MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(MdDrawer)
Vue.use(MdButton)
Vue.use(MdCard)

Vue.http.options.root = fbConfig.databaseURL

new Vue({
  render: h => h(App),
}).$mount('#app')
