import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {path: '/', name: 'ShoppingMall', component: () => import('components/ShoppingMall')},
        {path: '/register', name: 'Register', component: () => import('components/Register')},
    ]
})