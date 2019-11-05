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



const routes = [
  { path: '/', component: index },
  { path: '/index', component: index },
  { path: '/order', component: order},
  { path: '/search', component: search },
  { path: '/mine', component: mine },
  
];

const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
