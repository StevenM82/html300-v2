import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import Vue from 'vue'

new Vue({
    el: '#app',
    render: h => h(App)
})

// import 'src/components/_components.content.scss'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

//initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }
