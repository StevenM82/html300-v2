import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }



createApp(App).use(router).mount('#app')
