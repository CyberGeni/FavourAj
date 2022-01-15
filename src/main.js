import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Router components
import Home from './components/Home.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'

// Router init
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/resume', component: Resume},

    // mediocre routing of project information components
    
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})