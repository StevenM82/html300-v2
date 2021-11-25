<template>
    <ul class="section-images">
        <!-- setting the :src="image.url" is required to bind source, aka src=, to the url of the image  -->
        <!-- using img-fluid automatically sets the image dimensions to fill a single grid square when using CSS Grid -->
        <image-component 
            v-for="image in images" 
            :key="image.name"
            >
        </image-component>
    </ul>
</template>

<script>
    import ImageComponent from '@/src/components/ImageComponent.vue'

    export default {
        name: 'Images',
        components: {
            ImageComponent
        },
        data() {
            // you have to place the image url inside require() to get it to show from the array 
            // otherwise it will just show the url and not load the image
            return {
                images: [
                    {title: 'camping', src: require('@/assets/camping-wings-veggies.jpg')},
                    {title: 'market', src: require('@/assets/the-market.jpg')},
                    {title: 'forest', src: require('@/assets/tropical-forest.jpg')},
                    {title: 'glacial', src: require('@/assets/glacial-lake.jpg')},
                    {title: 'festival', src: require('@/assets/festival-2019.jpg')},
                    {title: 'muertos', src: require('@/assets/los-muertos.jpg')},
                    {title: 'interior', src: require('@/assets/original-interior.jpg')},
                    {title: 'interior2', src: require('@/assets/original-interior-2.jpg')},
                    {title: 'floor', src: require('@/assets/floor-removed.jpg')},
                    {title: 'sliding-door', src: require('@/assets/sliding-door-prep.jpg')}
                ]
            }
        }
    }
</script>
