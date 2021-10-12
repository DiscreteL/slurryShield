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

// 限制某些页面禁止未登录访问
let limitPagePath = ['/home']

router.beforeEach((to, from, next) => {
    if (limitPagePath.includes(to.path)) {
        // 判断sessionStorage是否保存了用户信息
        let userStr = sessionStorage.getItem("user") || "{}"
        let user = JSON.parse(userStr)
        if (!user.id) {
            // 跳转到登录页面
            next({path: "/login"})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
