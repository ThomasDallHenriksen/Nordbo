import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import hardwareSetup from '@/components/hardwareSetup.vue'
import HardwareView from '@/views/HardwareView.vue'
import ControllerView from '@/views/ControllerView.vue'
import IrTrackerView from '@/views/IrTrackerView.vue'
import HowToIrTrackerView from '@/views/HowToIrTrackerView.vue'
import UrPreperationView from '@/views/UrPreperationView.vue'
import UrSetupView from '@/views/UrSetupView.vue'
import UrCapView from '@/views/UrCapView.vue'
<<<<<<< HEAD
import UrReadyView from '@/views/UrReadyView.vue'
=======
import UrMainView from '@/views/UrMainView.vue'
>>>>>>> d37ae368f4bfe7619d08526340f14f40f7104caf

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
      path: '/UrPreperationView',
      name: 'UrPreperationView',
      component: UrPreperationView
    },
    {
      path: '/UrSetupView',
      name: 'UrSetupView',
      component: UrSetupView
    },
    {
      path: '/UrCapView',
      name: 'UrCapView',
      component: UrCapView
    },
    {
<<<<<<< HEAD
      path: '/UrReadyView',
      name: 'UrReadyView',
      component: UrReadyView
=======
      path: '/UrMainView',
      name: 'UrMainView',
      component: UrMainView
>>>>>>> d37ae368f4bfe7619d08526340f14f40f7104caf
    },

  ]
})

export default router
