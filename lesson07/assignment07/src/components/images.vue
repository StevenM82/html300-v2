<template>
    <div class="grid-container">
        
        <ul class="section-images">
            <li><img class="img-fluid" data-toggle="tooltip" data-placement="left" title="As delicious as it looks!"
                src="images/camping-wings-veggies.jpg" alt="chicken wings and skewered veggies
                cooking over a fire"></li>
            <li><img class="img-fluid" src="images/the-market.jpg"></li>
            <li><img class="img-fluid" src="images/tropical-forest.jpg"></li>
            <li><img class="img-fluid" src="images/glacial-lake.jpg"></li>
            <li><img class="img-fluid" src="images/festival-2019.jpg"></li>
            <li><img class="img-fluid" src="images/los-muertos.jpg"></li>
            <li><img class="img-fluid" src="images/original-interior.jpg"></li>
            <li><img class="img-fluid" src="images/original-interior-2.jpg"></li>
            <li><img class="img-fluid" src="images/floor-removed.jpg"></li>
            <li><img class="img-fluid" src="images/sliding-door-prep.jpg"></li>
        </ul>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="index.js"></script>
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
    @include grid-main;
    grid-area: 2 / 2 / 10 / 12;
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


<!-- This moves the heading up and down -->
    <!-- https://codepen.io/ZachSaucier/pen/RwVdEJO -->
    <!-- <main class="main" aria-label="You expect this pen to do one thing but it changed into something else. — Zach Saucier">
      <blockquote cite="" aria-hidden>

        <p class="colored-text">
          <span>but finding</span>
        </p>

        <div class="cut-text-container">
          <h1 class="cut-text"><span>Wanderlust</span></h1>
          <h2 class="cut-text"><span>a la Carte</span></h2>
        </div>

        <p class="colored-text second">
          <span>Not lost</span>
        </p>
      </blockquote>
    </main> -->
