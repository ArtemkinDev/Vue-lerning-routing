import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/profile/:user_id',
            name: 'Profile',
            component: ViewProfile
        },
        {
            path: '/404',
            alias: '*',
            name: '404',
            component: PageNotFound
        }
    ]
})
