import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import UserList from './components/UserList.vue'
import UserDetails from './components/UserDetails.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/users'},
  {path: '/users', component: UserList},
  {path: '/users/:id', component: UserDetails}
]


const router  = new VueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
