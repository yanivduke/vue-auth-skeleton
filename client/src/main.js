import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import {init} from './idbPromise'
import {reg} from './plugins/registerServiceWorker'

Vue.config.productionTip = false

init();
reg();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

