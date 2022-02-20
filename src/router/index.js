import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from "../views/Signup.vue"
import Dashboard from "../views/Dashboard.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Profile from "../views/Profile.vue"
import Balance from "../views/Balance.vue"
import Projects from "../views/Projects.vue"
import Error from "../views/Error.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/wallet',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/:id',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
