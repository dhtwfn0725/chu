import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css';
Vue.config.productionTip = false
import Mint from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(Mint);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
