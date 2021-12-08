
const toggleMixin = {
    created() {
        this.toggleBorder()
    },
    methods: {
        toggleBorder() {
            isActive = !isActive
        }
    }
}
  
// define an app that uses this mixin
const app = Vue.createApp({
mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"