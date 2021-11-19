<template>
  <section class="section">
    <div id="accordion">

      <!-- .card is the container that will hold all of the information for each individual accordian  -->
      <div class="card mb-1">
        <div class="card-header text-center" id="headingOne">
          <h5 class="mb-0">
            <!-- The user interacts with the button to make the accordian show/collapse the inner content. The data-target tells the button which element to interact with.  -->
            <!-- setting data-toggle="collapse" initializes the box with only the button title showing -->
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Where we started
            </button>
          </h5>
        </div>

        <!-- we attach the button here and assign the accordian its initial state -->
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <!-- .card-body holds the accordian's content and is shown/hidden when the user selects the corresponding button -->
          <div class="card-body">
            <img class="img-thumbnail" src="../assets/the-market.jpg">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>


    <!-- this makes the card -->
    <!-- <div class="card">
      <div class="card-header text-center">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></button>
        </h5>
      </div> -->

    <!-- this makes the content -->
      <!-- <div id="1">
        <div class="card-body">
          {image, text}
        </div>
      </div> -->

    <!-- </div> -->

    <div 
      class="card"
      v-for="box in boxes"
      :key="box.id">
    </div>
  </section>
  
</template>

  <!-- make the images and their text an object so they can be iterated over
  use v-if/v-else to make the cards get progressively smaller, but only until a certain point  -->
  <!-- each card has a card title, and a thumbnail with text in the drop down 
  
      <div class="card mx-3 mb-1">
      <div class="card mx-5 mb-1">
    -->

<script>
  export default {
    name: 'Accordian',
    //use v-if/v-else or v-show on the accordian to expand and collapse
    data() {
      return {
        isCollapsed: true,
        // cardInfo: [
        //   { image: "../assets/the-market.jpg", text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
        //   { image: "../assets/original-interior.jpg", text: 123, },
        //   { image: "../assets/tropical-forest.jpg", text: 123, },
        // ]
        boxes: [
          {id: 1},
          {id: 2},
          {id: 3},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .card:hover {
    transition: .5s all ease-in-out;
    box-shadow: 0 0 10px black;
  }
</style>
