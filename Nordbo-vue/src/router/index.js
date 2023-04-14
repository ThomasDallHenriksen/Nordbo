import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import hardwareSetup from '@/components/hardwareSetup.vue'
import guide from '@/views/guide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //{
      //path: '/hardwareSetup',
      //name: 'hardwareSetup',
      //component: hardwareSetup
    //},
    {
      path: '/guide',
      name: 'guide',
      component: guide
      
    },

  ]
})

export default router
