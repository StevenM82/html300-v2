<template>
    <img> 
</template>

<script>
export default {
    name: 'ImageComponent',
    data () {
        return {
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
                    required: true,
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .img-border {
        border: 2px solid black;
    }
    .no-border {
        border: 2px solid #fff;
    }
</style>