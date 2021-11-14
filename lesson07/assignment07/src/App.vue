<<<<<<< HEAD
<template>
  <div id="nav" class="nav">
    <!--<router-link> acts like an <a> with the correct href -->
    <router-link to="/">The Beginning</router-link> |
    <router-link to="/images">Images</router-link> |
    <router-link to="/accordian">Accordian</router-link> |
    <router-link to="/boot-grid">Boot-grid</router-link> 
  </div>
  <router-view/>
</template>

=======
<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<template>
  <div id="app">
    
  </div>
</template>



>>>>>>> 7.0.1
<style lang="scss">
@import '@/assets/_app.scss';
@import '@/assets/_grid.font.mixins.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
