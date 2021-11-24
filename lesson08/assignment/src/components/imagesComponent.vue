<template>
    <li>
        <img class="img-fluid">{{ image.src }}
    </li>
</template>

<script>
export default {
    name: 'imagesComponent',
    methods: {

    }  
}
images.component('Imagine', {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        }
    }
})


</script>

<style lang="scss">
</style>