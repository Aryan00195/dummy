import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormComponent from '../components/FormComponent.vue'
import RegisterComponent from '../components/RegistrationComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: FormComponent
  },
  {
    path: '/login',
    name: 'login',
    component: RegisterComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
