import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Index from './views/Index'
// import AttList from './views/AttractionsList.vue'
// import Details from './views/Details.vue'
// import My from './views/My.vue'
// import Collection from './views/Collection.vue'
// import MyAlbum from './views/MyAlbum.vue'
// import Register from './views/Reg.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: (resolve) => require(['./views/Home.vue'],resolve)
        }, {
            path: '/login',
            name: 'login',
            // route level code-splitting this generates a separate chunk (about.[hash].js)
            // for this route which is lazy-loaded when the route is visited.
            component:(resolve) => require(['./views/Login.vue'],resolve)
        }, {
            path: '/index',
            name: 'index',
            // route level code-splitting this generates a separate chunk (about.[hash].js)
            // for this route which is lazy-loaded when the route is visited.
            component:(resolve) => require(['./views/Index.vue'],resolve)

        }, {
            path: '/attlist',
            component:(resolve) => require(['./views/AttractionsList.vue'],resolve)

        }, {
            path: "/details",
            component:(resolve) => require(['./views/Details.vue'],resolve)
        }, {
            path: "/my",
            component:(resolve) => require(['./views/My.vue'],resolve)
        },{
            path: "/myAlbum",
            component:(resolve) => require(['./views/MyAlbum.vue'],resolve)
        }, {
            path: "/collection",
            component:(resolve) => require(['./views/Collection.vue'],resolve)
        }, {
            path: "/reg",
            component:(resolve) => require(['./views/Reg.vue'],resolve)
        }

    ]
})
