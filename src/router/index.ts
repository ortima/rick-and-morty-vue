import { LocationsPage, HomePage, CharactersPage } from '@/pages'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/characters',
      name: 'Characters',
      component: CharactersPage,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsPage,
    },
  ],

  linkActiveClass: 'text-yellow-400',
})

export default router
