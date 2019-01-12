// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
