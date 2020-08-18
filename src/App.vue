<template>
  <div id="app">
    <img src="./assets/logo.jpg" />
    <HelloWorld msg="Welcome to The one punch man game"/>
    <div class="row">
      <div class="col"><HelloWorld msg="select the hero"/></div>
      </div>
      <div class="col"><Heropic/></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Heropic from './components/Heropic.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Heropic,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
