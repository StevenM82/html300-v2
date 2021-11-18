import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'
import Header from './views/Header'
import Home from './views/Home'
import Images from './views/Images'
import Accordian from './views/Accordian'
import Bootgrid from './views/Boot-grid'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
createApp(Header).use(router).mount('#header')
createApp(Home).use(router).mount('#home')
createApp(Images).use(router).mount('#images')
createApp(Accordian).use(router).mount('#accordian')
createApp(Bootgrid).use(router).mount('#boot-grid')


// const app = Vue.createApp({
//     data() {
//         return {
//             product: 'Socks',
//             image: './assets/images/socks_green.jpg',
//             // solution
//             url: 'https://www.vuemastery.com/'
//             // solution
//         }
//     }
// })


