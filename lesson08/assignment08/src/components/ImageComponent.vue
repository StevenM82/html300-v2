<template>
    <li>
        <img @click="toggleBorder()" 
            :style="{ border: (isActive ? 'img-border' : null)}" 
            :class="'img-fluid'" 
            :src="image.url"> {{ url }} {{ name }}
    </li>
</template>

<script>
export default {
    name: 'ImageComponent',

    props: {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: false,
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
        border: 2px solid black;
    }
</style>