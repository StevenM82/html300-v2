import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'
import Home from '/Home'
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
createApp(Home).use(router).mount('#home')
createApp(Images).use(router).mount('#images')
createApp(Accordian).use(router).mount('#accordian')
createApp(Bootgrid).use(router).mount('#boot-grid')



//initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }
