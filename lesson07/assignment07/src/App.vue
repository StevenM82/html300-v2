<template>
  <div id="app">
    <div class="grid-container">
      <main class="main">
        <img class="header-img" src="/src/assets/lopez-island.jpg"
          alt="A view looking out toward the water from a tree filled and rocky island">
        <div class="flex-heading">
          <h1>Wanderlust a la Carte</h1>
          <h2>Not lost, but finding</h2>
        </div>
      </main>
      <nav class="nav">
        <ul class="nav-list">
          <!--<router-link> acts like an <a> with the correct href -->
          <li><router-link to="/">The Beginning</router-link></li>
          <li><router-link to="/images">Images</router-link></li>
          <li><router-link to="/boot-grid">Boot-grid</router-link></li>
          <li><router-link to="/accordian">Accordian</router-link></li>
          <li>
              <span data-toggle="tooltip" title="Not working yet">
                  <a class="nav-link disabled" href="#">More and more</a>
              </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- <router-view/> -->
</template>

<style lang="scss">
@import 'css/normalize';
@import 'css/settings.variables';
@import 'css/settings.responsive';
@import 'css/grid.font.mixins';
@import 'css/components.content';

  // place the nav at the bottom of the header, on top of the header image
  .nav {
  grid-area: 12 / 1 / 12 / span 12;
  color: $white;
  }
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 1.5rem;
  }

  // Hover transition:
  //https://codepen.io/dig-lopes/pen/WLVGda?editors=1100
  a {
    color: $white;
    text-decoration: none;
    padding: 0 2rem;
    transition: .5s all ease-in-out;
  }
  //ease in and change the text and background color and add a border
  a:hover {
    color: $neon-yellow;
    box-shadow: 0 0 5px $neon-yellow;
    text-shadow: 0 0 5px $neon-yellow;
    background-color: rgb(63, 63, 63);
    border-radius: 3rem;
    font-size: 2rem;
  }
</style>