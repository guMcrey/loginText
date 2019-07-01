import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
