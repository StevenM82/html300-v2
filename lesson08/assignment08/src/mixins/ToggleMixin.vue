<script>
//creating the toggle mixin here
export default {
    name: 'ImageMixin',

    data () {
        return {
            isActive: false,
        }
    },
    methods: {
        toggleBorder() {
            isActive = !isActive
        }
    }  
}

</script>