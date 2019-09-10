import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import Mint from 'mint-ui';

Vue.use(Mint);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
