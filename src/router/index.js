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
      component: () => import('../views/PartyView.vue'),
    },
    {
      path: '/foes',
      name: 'foes',
      component: () => import('../views/FoesView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/foes/FoesDashboard.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../views/foes/FoesCreate.vue'),
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: () => import('../views/foes/FoesEdit.vue'),
        }
      ]
    },
  ]
})

export default router
