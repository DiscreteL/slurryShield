import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: '/login'},
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{title: '欢迎来到主页'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login"),
    meta:{title: '欢迎来到泥水盾构可视化平台！'}
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register"),
    meta:{title: 'Registering'}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
