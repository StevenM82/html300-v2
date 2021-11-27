<template>
    <li>
        <img class="img-fluid"> {{ image.url }}
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
    // data: () => ({
    //     isToggled = false,
    //     border: none
    // }),
    // methods: {
    //     toggleBorder() {
    //         isToggled = !isToggled
    //         if(isToggled == 'true') {
                
    //         }
    //     }
    // }  
}

</script>

<style lang="scss">
    .border {
        border: 1px black solid;
    }
</style>