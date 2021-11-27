<template>
    <li>
        <img @click="toggleBorder()" class="img-fluid" :src="image.url"> {{ url }} {{ name }}
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
    methods: {
        toggleBorder() {
            isToggled = !isToggled
        }
    }  
}

</script>

<style lang="scss">
    .border {
        border: 10px black solid;
    }
</style>