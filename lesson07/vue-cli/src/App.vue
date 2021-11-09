<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button>Click me</button>
    <button :disabled="isActive">Submit</button>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isActive: true, 
    }
  },
  methods: {
    function () {
      $('[data-toggle="tooltip"]').tooltip()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.demo {
  height: 100px;
  width: 100px;
  background-color: green;
}
.red {
  background-color: red;
}
</style>
