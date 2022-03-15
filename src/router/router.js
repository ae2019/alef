import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import ChildsList from '../components/ChildsList.vue'
import vResult from '../components/vResult.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ChildsList
  },
  {
    path: '/result',
    name: 'result',
    component: vResult
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
