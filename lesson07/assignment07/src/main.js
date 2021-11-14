import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './app.scss'
import '../_components.content.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

createApp(App).mount('#app')

//initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }



createApp(App).use(router).mount('#app')
