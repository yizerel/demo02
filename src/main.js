import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


import 'vant/lib/index.css';
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueRouter)
import Index from './components/Index.vue';
import order from './components/Order.vue';
import search from './components/Search.vue';
import mine from './components/Mine.vue';



const routes = [
  { path: '/', component: Index },
  { path: '/index', component: Index },
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
