import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Picture from '../views/Picture.vue'
import Certificate from '../views/Certificate.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const routes = [
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Picture',
    name: 'Picture',
    component: Picture
  },
  {
    path: '/Certificate',
    name: 'Certificate',
    component: Certificate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
