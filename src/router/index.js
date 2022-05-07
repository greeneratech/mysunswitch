import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/User/Login.vue'
import BusinessLogin from "../views/BusinessOwner/Login.vue"
import Signup from "../views/User/Signup.vue"
import BusinessSignup from "../views/BusinessOwner/Signup.vue"
import Dashboard from "../views/User/Dashboard.vue"
import AdminLogin from "../views/Admin/Login.vue"
import AdminDashboard from "../views/Admin/Dashboard.vue"
import AdminProjects from "../views/Admin/Projects.vue"
import AdminAddProject from "../views/Admin/AddProject.vue"
import AdminPayments from "../views/Admin/Payments.vue"
import AdminFaqs from "../views/Admin/Faqs.vue"
import AdminDisclaimers from "../views/Admin/Disclaimer.vue"
import AdminTandC from "../views/Admin/TandC.vue"
import AdminTeam from "../views/Admin/TeamMembers.vue"
import AdminBank from "../views/Admin/Banks.vue"
import BusinessDashboard from "../views/BusinessOwner/Dashboard.vue"
import BusinessProfile from "../views/BusinessOwner/Profile.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Profile from "../views/User/Profile.vue"
import Balance from "../views/User/Balance.vue"
import BusinessWallet from "../views/BusinessOwner/Wallet.vue"
import Account from "../views/User/Account.vue"
import Projects from "../views/User/Projects.vue"
import SingleProject from "../views/User/SingleProject.vue"
import History from "../views/User/History.vue"
import BusinessHistory from "../views/BusinessOwner/History.vue"
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
    path: '/business/signup',
    name: 'BusinessSignup',
    component: BusinessSignup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/business/login',
    name: 'BusinessLogin',
    component: BusinessLogin
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/admin/projects',
    name: 'AdminProjects',
    component: AdminProjects
  },
  {
    path: '/admin/addproject',
    name: 'AdminAddProject',
    component: AdminAddProject
  },
  {
    path: '/admin/payments',
    name: 'AdminPayments',
    component: AdminPayments
  },
  {
    path: '/admin/faqs',
    name: 'AdminFaqs',
    component: AdminFaqs
  },
  {
    path: '/admin/disclaimers',
    name: 'AdminDisclaimers',
    component: AdminDisclaimers
  },
  {
    path: '/admin/t-and-c',
    name: 'AdminTandC',
    component: AdminTandC
  },
  {
    path: '/admin/team',
    name: 'AdminTeam',
    component: AdminTeam
  },
  {
    path: '/admin/bank',
    name: 'AdminBank',
    component: AdminBank
  },
  {
    path: '/business/dashboard',
    name: 'BusinessDashboard',
    component: BusinessDashboard
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/business/profile',
    name: 'BusinessProfile',
    component: BusinessProfile
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
    path: '/business/wallet',
    name: 'BusinessWallet',
    component: BusinessWallet
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/project/:id',
    name: 'SingleProject',
    component: SingleProject
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/business/history',
    name: 'BusinessHistory',
    component: BusinessHistory
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
