<script>
export default {
    name: 'imageComponent', 
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
}
</script>

<template>
    <li><img {{image.url}} ></li>
</template>


<style lang="scss">

</style>