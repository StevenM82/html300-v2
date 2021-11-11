import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import(/* webpackChunkName: "images" */ '../views/Images.vue')
  },
  {
    path: '/accordian',
    name: 'Accordian',
    component: () => import(/* webpackChunkName: "acccordian" */ '../views/Accordian.vue')
  },
  {
    path: '/boot-grid',
    name: 'Boot-grid',
    component: () => import(/* webpackChunkName: "boot-grid" */ '../views/Boot-grid.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
