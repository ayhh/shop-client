import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
import Search from '@/pages/Search/Search.vue'

const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      meta:{
        isHidden: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta:{
        isHidden: true
      }
    },
    {
      path: '/search',
      component: Search
    },
  ]
})

export default router
