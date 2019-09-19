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
import axios from 'axios';


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8081';

// 添加响应拦截器   
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么  此处直接拿返回的data   否则 axios会自己在响应数据上包一层对象
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


Vue.prototype.axios = axios;


Vue.use(Vant);

Vue.use(Mint);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
