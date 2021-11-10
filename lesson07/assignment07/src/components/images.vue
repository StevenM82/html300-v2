<template>
    <div id="">
        <ul class="section-images text-decoration-none p-0">
            <li><img class="img-fluid" data-toggle="tooltip" data-placement="left" title="As delicious as it looks!"
                src="./assets/camping-wings-veggies.jpg" alt="chicken wings and skewered veggies
                cooking over a fire"></li>
            <li><img class="img-fluid" src="./assets/the-market.jpg"></li>
            <li><img class="img-fluid" src="./assets/tropical-forest.jpg"></li>
            <li><img class="img-fluid" src="./assets/glacial-lake.jpg"></li>
            <li><img class="img-fluid" src="./assets/festival-2019.jpg"></li>
            <li><img class="img-fluid" src="./assets/los-muertos.jpg"></li>
            <li><img class="img-fluid" src="./assets/original-interior.jpg"></li>
            <li><img class="img-fluid" src="./assets/original-interior-2.jpg"></li>
            <li><img class="img-fluid" src="./assets/floor-removed.jpg"></li>
            <li><img class="img-fluid" src="./assets/sliding-door-prep.jpg"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style>

/* Set the section element to be the outer grid container for the body of the page
This is used on the images.html page only */

.section-images {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-area: 2 / 2 / 10 / 12;
  gap: 0.5rem;
  list-style: none;
  
  /* This gives grid dimensions for the nth-child of the images list */
  li:nth-child(1) {
      grid-column: span 2;
      grid-row: span 1;
  }
  li:nth-child(2) {
      grid-column: span 1;
      grid-row: span 5;
  }
  li:nth-child(4) {
      grid-row: span 2;
  }
  li:nth-child(6) {
      grid-column: span 3;
      grid-row: span 2;
  }
  li:nth-child(7) {
      grid-column: span 1;
      grid-row: span 1;
  }
  li:nth-child(8) {
      grid-column: span 2;
  }
  li:nth-child(10) {
      grid-column: span 2;
      grid-row: span 2;
  }
}
</style>

