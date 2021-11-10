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
            <img class="img-thumbnail" src="images/the-market.jpg">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>

      <div class="card mx-3 mb-1">
        <div class="card-header text-center" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How it looked
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            <img class="img-thumbnail" src="images/original-interior.jpg">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>

      <div class="card mx-5 mb-1">
        <div class="card-header text-center" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              The quiet
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            <img class="img-thumbnail" src="images/tropical-forest.jpg">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<script>
  export default {
    data() {
      return {
          
      }
    }
  }
</script>


<style lang="scss">
  .card:hover {
    box-shadow: 0 0 10px black;
  }
</style>

