<template>
  <main>
      <app-header></app-header>
      <router-view></router-view>
      <hr>
      <footer>
        
        <section>
          <h1>have an idea?</h1>
          <p>lets chat about it.</p>
        </section>
        <section>
          <ul>
            <h4>playground</h4>
            <li><a href="">behance</a></li>
            <li><a href="">dribbble</a></li>
          </ul>
          <ul>
            <h4>socials</h4>
            <li><a href="">twitter</a></li>
            <li><a href="">linkedin</a></li>
          </ul>
        </section>
      </footer>
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
    @font-face {
        font-family: Trap;
        src: url(/assets/fonts/Trap_/Trap-Regular.otf);
    }
    @font-face {
        font-family: Circular;
        src: url(/src/assets/fonts/Circular/CircularStd-Book.otf);
    }
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
  hr {
    opacity: 0.2;
  }
  footer {
    display: flex;
    width: 100%;
    margin: 3em 0;
  }
  
  footer h1 {
    font-family: 'Trap' !important;
    font-size: 3em;
    background: -webkit-linear-gradient(180deg, #A8FFBB 33.3%, #6B81F0 33.3%, #CC48ED 33.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0.2em 0;
  }
  footer p {
    font-family: 'Circular';
    color: white;
    font-size: 20px;
  }
  footer h4 {
    font-family: 'Circular';
    color: white;
    font-size: 18px;
    margin-bottom: 0.8em;
  }
  footer li, footer li h4 {
    font-family: 'Circular';
    list-style: none;
    color: white;
  }
  footer li a {
    color: white;
    text-decoration: none;
    line-height: 35px;
  }
  footer section:nth-child(2) {
    display: flex;
    justify-content: center;
  }
</style>
