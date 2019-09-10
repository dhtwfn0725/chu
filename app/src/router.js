import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
<<<<<<< HEAD
import AttList from './views/AttractionsList.vue'
=======
import Details from './views/Details.vue'
>>>>>>> 8e6f52168ac7dcb4a631bd382faa13e1024c7460

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Index
    },
<<<<<<< HEAD
    {
      path:'/attlist',
      component:AttList
    }
=======
    {path:"/details",component:Details}
>>>>>>> 8e6f52168ac7dcb4a631bd382faa13e1024c7460
  ]
})
