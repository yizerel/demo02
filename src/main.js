import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


import 'vant/lib/index.css';
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueRouter)
import index from './components/index.vue';
import order from './components/order.vue';
import search from './components/search.vue';
import mine from './components/mine.vue';
import information from './components/information.vue';
import security from './components/security.vue';
import pay from './components/pay.vue';
import address from './components/address.vue';



const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/order', component: order},
  { path: '/search', component: search },
  { path: '/mine', name:'mine',component: mine },
  { path: '/information', component: information },
  { path: '/security', component: security },
  { path: '/pay', component: pay },
  { path: '/address', component: address }
  
];

const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
