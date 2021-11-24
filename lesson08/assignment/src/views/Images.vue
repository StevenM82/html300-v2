<template>
    <ul class="section-images">
        <!-- setting the :src="image.url" is required to bind source, aka src=, to the url of the image  -->
        <!-- using img-fluid automatically sets the image dimensions to fill a single grid square when using CSS Grid -->
        <imagesComponent 
            v-for="image in images" 
            :key="image.name"
            >
        </imagesComponent>
    </ul>
</template>

<script>
    import imagesComponent from './src/components/imagesComponent.vue'

    export default {
        name: 'Images',
        components: {
            imagesComponent,
        },
        data() {
            // you have to place the image url inside require() to get it to show from the array 
            // otherwise it will just show the url and not load the image
            return {
                images: [
                    {name: 'camping', src: require('@/assets/camping-wings-veggies.jpg')},
                    {name: 'market', src: require('@/assets/the-market.jpg')},
                    {name: 'forest', src: require('@/assets/tropical-forest.jpg')},
                    {name: 'glacial', src: require('@/assets/glacial-lake.jpg')},
                    {name: 'festival', src: require('@/assets/festival-2019.jpg')},
                    {name: 'muertos', src: require('@/assets/los-muertos.jpg')},
                    {name: 'interior', src: require('@/assets/original-interior.jpg')},
                    {name: 'interior2', src: require('@/assets/original-interior-2.jpg')},
                    {name: 'floor', src: require('@/assets/floor-removed.jpg')},
                    {name: 'sliding-door', src: require('@/assets/sliding-door-prep.jpg')}
                ]
            }
        }
    }
</script>

