import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/CreateForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Create
  },
  {
    path: '/personal',
    name: 'personal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalDatas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
