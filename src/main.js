import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import VueParticles from 'vue-particles'


const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(VueParticles)
    .mount('#app')

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})