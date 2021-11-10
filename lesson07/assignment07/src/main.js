import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './app.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

createApp(App).mount('#app')

//initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }

new Vue({
    el: '#app',
    render: h => h(App)
})

new Vue({
    el: '#listOfImages',
    data() {
        imagesNow = [
            {name: 'camping', image: './assets/camping-wings-veggies.jpg'},
            {name: 'market', image: './assets/the-market.jpg'},
            {name: 'forest', image: './assets/tropical-forest.jpg'},
            {name: 'glacial', image: './assets/glacial-lake.jpg'},
            {name: 'festival', image: './assets/festival-2019.jpg'},
            {name: 'muertos', image: './assets/los-muertos.jpg'},
            {name: 'interior', image: './assets/original-interior.jpg'},
            {name: 'interior2', image: './assets/original-interior-2.jpg'},
            {name: 'floor', image: './assets/floor-removed.jpg'},
            {name: 'sliding-door', image: './assets/sliding-door-prep.jpg'},
        ]
    },
    render: h => h(App)
})