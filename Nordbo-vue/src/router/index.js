import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HardwareView from '@/views/HardwareView.vue'
import ControllerView from '@/views/ControllerView.vue'
import IrTrackerView from '@/views/IrTrackerView.vue'
import HowToIrTrackerView from '@/views/HowToIrTrackerView.vue'
import UrCapView from '@/views/UrCapView.vue'
import UrMainView from '@/views/UrMainView.vue'
import NachiConfiqView from '@/views/NachiConfiqView.vue'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import KukaPrepView from '@/views/KukaPrepView.vue'
=======
=======
>>>>>>> c986b158124c16d9a0a7453bf354b84e201b7ac0
import UrPreperationView from '@/views/UrPreperationView.vue'
import UrSetupView from '@/views/UrSetupView.vue'
import UrReadyView from '@/views/UrReadyView.vue'
import NachiMimicView from '@/views/NachiMimicView.vue'
import NachiHardwareView from '@/views/NachiHardwareView.vue'
import NachiReadyView from '@/views/NachiReadyView.vue'
import KukaReadyView from '@/views/KukaReadyView.vue'


<<<<<<< HEAD
=======
>>>>>>> 9849dff13183955d370572e7bcfc43d2cb6eb23a
>>>>>>> 8e9bd1137f58d08eb88d0acfe1cad2a1dc66093a
>>>>>>> c986b158124c16d9a0a7453bf354b84e201b7ac0

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
<<<<<<< HEAD
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
=======
>>>>>>> c986b158124c16d9a0a7453bf354b84e201b7ac0
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
    {
<<<<<<< HEAD
      path: '/UrReadyView',
      name: 'UrReadyView',
      component: UrReadyView
=======
      path: '/KukaPrepView',
      name: 'KukaPrepView',
      component: KukaPrepView
>>>>>>> c986b158124c16d9a0a7453bf354b84e201b7ac0
    },
    {
      path: '/NachiMimicView',
      name: 'NachiMimicView',
      component: NachiMimicView
    },
    {
      path: '/NachiHardwareView',
      name: 'NachiHardwareView',
      component: NachiHardwareView
    },
    {
      path: '/NachiReadyView',
      name: 'NachiReadyView',
      component: NachiReadyView
    },
    {
      path: '/KukaReadyView',
      name: 'KukaReadyView',
      component: KukaReadyView
    },
  ]
})

export default router
