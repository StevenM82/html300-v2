import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//set all of the urls and attach all of the other .vue files here 
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
