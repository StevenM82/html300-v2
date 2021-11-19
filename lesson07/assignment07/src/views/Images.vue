<template>
    <ul class="section-images">
        <li 
            v-for="image in images" 
            :key="image.name"
            ><img class="img-fluid" :src="image.url">
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'Images',
        data() {
            return {
                images: [
                    {name: 'camping', url: '../assets/camping-wings-veggies.jpg'},
                    {name: 'market', url: '../assets/the-market.jpg'},
                    {name: 'forest', url: '../assets/tropical-forest.jpg'},
                    {name: 'glacial', url: '../assets/glacial-lake.jpg'},
                    {name: 'festival', url: '../assets/festival-2019.jpg'},
                    {name: 'muertos', url: '../assets/los-muertos.jpg'},
                    {name: 'interior', url: '../assets/original-interior.jpg'},
                    {name: 'interior2', url: '../assets/original-interior-2.jpg'},
                    {name: 'floor', url: '../assets/floor-removed.jpg'},
                    {name: 'sliding-door', url: '../assets/sliding-door-prep.jpg'},
                ],
            }
        }
    }
</script>
