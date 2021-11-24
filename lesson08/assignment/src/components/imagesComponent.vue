<template>
    <li>
        <img @click="toggleBorder()" class="img-fluid">{{ image.src }}
    </li>
</template>


<script>
export default {
    name: 'ImagesComponent',

    //creating the toggle mixin here
    data: () => ({
        isToggled = false,
    }),
    methods: {
        toggleBorder() {
            isToggled = !isToggled
        }
    }  
}

images.component('my-image', {
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
    .border {
        border: 1px black solid;
    }
</style>