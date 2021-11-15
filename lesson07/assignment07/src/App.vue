<template>
  <div id="app">
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
  <!-- <router-view/> -->
</template>

<style lang="scss">
@import '@/assets/_settings.variable.scss';
@import '@/assets/_grid.font.mixins.scss';
@import '@/assets/_app.scss';
// @import '@/components/_components.contents.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // place the nav at the bottom of the header, on top of the header image
  grid-area: 12 / 1 / 12 / span 12;
  color: white;
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 1.5rem;
  }

  // Hover transition:
  //https://codepen.io/dig-lopes/pen/WLVGda?editors=1100
  a {
    color: white;
    text-decoration: none;
    padding: 0 2rem;
    transition: .5s all ease-in-out;
  }
  //ease in and change the text and background color and add a border
  a:hover {
    color: yellow;
    box-shadow: 0 0 5px yellow;
    text-shadow: 0 0 5px yellow;
    background-color: rgb(63, 63, 63);
    border-radius: 3rem;
    font-size: 2rem;
  }
  
    &.router-link-exact-active {
      color: #42b983;
    }
  }


</style>