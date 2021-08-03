import Vue from 'vue'
import App from '@/App'
import router from '@/router/router'
import store from '@/store'
import '@/mock/mockServer'

import 'swiper/css/swiper.css';

//全局组件
import TypeNav from '@/components/TypeNav/TypeNav.vue';

// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.component('TypeNav', TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
