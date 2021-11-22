<template>
  <section class="section">
      <div id="accordion">
        <div 
          class="card mb-1"
          v-for="box in boxes"
          :key="box.id">
            <div class="card-header text-center" @click="box.isCollapsed = !box.isCollapsed">
              <div>
                <h5 class="mb-0">{{ box.header }}</h5>
              </div>
              <div>
                <!-- changes the direction of the arrow that is on the box -->
                <span v-if="box.isCollapsed">&#x2191;</span>
                <span v-else>&#x2193;</span>
              </div>
            </div>
            <div class="card-body" v-if="box.isCollapsed">
              <img class="img-thumbnail"> {{ box.image }}
              {{ box.text }}
            </div>
          </div>
      </div>
  </section>  
</template>

<script>
export default {
    name: 'Accordian',
    data() {
      return {
        isCollapsed: true,
        boxes: [
          {id: 1, header: "Where we started", image: require("../assets/the-market.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
          {id: 2, header: "How it looked", image: require("../assets/original-interior.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
          {id: 3, header: "The quiet", image: require("../assets/tropical-forest.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
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
