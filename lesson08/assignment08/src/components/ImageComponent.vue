<template>
    <li>
        <img @click="toggleBorder()" :style="{ border: (isToggled ? 'border' : null)}" class="img-fluid" :src="image.url"> {{ url }} {{ name }}
    </li>
</template>

<script>
export default {
    name: 'ImageComponent',

    props: {
        url: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true,
        }
    },


    //creating the toggle mixin here
    data () {
        return {
            isActive = false,
        }
    },
    methods: {
        toggleBorder() {
            isActive = !isActive
        }
    }  
}

</script>

<style lang="scss">
    .img-border {
        border: 10px solid black;
    }
</style>