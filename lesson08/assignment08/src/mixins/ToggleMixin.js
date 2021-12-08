export const toggleMixin = {
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        toggleBorder() {
            this.isShowing = !this.isShowing
        }
    }
}
