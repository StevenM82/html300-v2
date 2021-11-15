import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import './app.scss'
// import 'src/components/_components.content.scss'


createApp(App).mount('#app')

//initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }


createApp(App).use(router).mount('#app')
