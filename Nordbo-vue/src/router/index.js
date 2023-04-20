import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HardwareView from '@/views/HardwareView.vue'
import ControllerView from '@/views/ControllerView.vue'
import IrTrackerView from '@/views/IrTrackerView.vue'
import HowToIrTrackerView from '@/views/HowToIrTrackerView.vue'
import UrCapView from '@/views/UrCapView.vue'
import UrMainView from '@/views/UrMainView.vue'
import NachiConfiqView from '@/views/NachiConfiqView.vue'

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
      path: '/HardwareView',
      name: 'HardwareView',
      component: HardwareView
    },
    {
      path: '/ControllerView',
      name: 'ControllerView',
      component: ControllerView
    },
    {
      path: '/IrTrackerView',
      name: 'IrTrackerView',
      component: IrTrackerView
    },
    {
      path: '/HowToIrTrackerView',
      name: 'HowToIrTrackerView',
      component: HowToIrTrackerView
    },
    {
      path: '/UrCapView',
      name: 'UrCapView',
      component: UrCapView
    },
    {
      path: '/UrMainView',
      name: 'UrMainView',
      component: UrMainView
    },
    {
      path: '/NachiConfiqView',
      name: 'NachiConfiqView',
      component: NachiConfiqView
    },

  ]
})

export default router
