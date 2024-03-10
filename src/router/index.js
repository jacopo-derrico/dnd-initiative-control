import { createRouter, createWebHistory } from 'vue-router'
import EncountersView from '../views/EncountersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'encounters',
      component: EncountersView
    },
    {
      path: '/party',
      name: 'party',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PartyView.vue')
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: () => import('../views/MonstersView.vue')
    },
  ]
})

export default router
