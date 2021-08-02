import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
        path: '/login',
        name: 'Login', 
        component: () => import('../views/Login.vue')
        },
        {
        path: '/register',
        name: 'Register', 
        component: () => import('../views/Register.vue')
        }
    ]
})