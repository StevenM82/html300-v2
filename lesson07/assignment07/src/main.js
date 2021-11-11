import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// initialize the toggle function for the the entire site
// function () {
//     $('[data-toggle="tooltip"]').tooltip()
// }

// new Vue({
//     el: '#listOfImages',
//     data() {
//         imagesNow = [
//             {name: 'camping', image: '../assets/camping-wings-veggies.jpg'},
//             {name: 'market', image: '../assets/the-market.jpg'},
//             {name: 'forest', image: '../assets/tropical-forest.jpg'},
//             {name: 'glacial', image: '../assets/glacial-lake.jpg'},
//             {name: 'festival', image: '../assets/festival-2019.jpg'},
//             {name: 'muertos', image: '../assets/los-muertos.jpg'},
//             {name: 'interior', image: '../assets/original-interior.jpg'},
//             {name: 'interior2', image: '../assets/original-interior-2.jpg'},
//             {name: 'floor', image: '../assets/floor-removed.jpg'},
//             {name: 'sliding-door', image: '../assets/sliding-door-prep.jpg'},
//         ]
//     },
//     render: h => h(App)
// })

createApp(App).use(router).mount('#app')
