import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroesPage from "../components/HeroesPage";
import ComicsPage from "../components/ComicsPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeroesPage
  },
  {
    path: '/:id',
    name: 'Details',
    component: ComicsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
