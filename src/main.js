import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import './style/Home.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueRouter)
import Home from './components/Home.vue'
import News from './components/News.vue'
import Order from './components/Order.vue'
import User from './components/User.vue'

const routes = [
  { path: '/Home', component: Home },
  { path: '/News', component: News },
  { path: '/Order', component: Order },
  { path: '/User', component: User }
]

const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
