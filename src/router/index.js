import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Favorites from '../views/Favorites.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/hero',
    name: 'Hero',
    component: Hero,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
