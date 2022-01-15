<template>
  <main>
      <app-header></app-header>
      <router-view></router-view>
      <footer></footer>
  </main>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-header': Header,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    background-image: url(/src/assets/noise.svg);
    position: relative;
    z-index: -100;
    overflow-x: hidden;
  }
  main {
    width: 90%;
    margin: auto;
  }
</style>
