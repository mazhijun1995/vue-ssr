import {
    createRouter,
    createWebHistory,
    createMemoryHistory
} from 'vue-router';

import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'

const isSSR = typeof window === "undefined";
const history = isSSR ? createWebHistory() : createMemoryHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/about',
        name: 'About',
        component: About,
        
    }
]

export default () => createRouter({
    history,
    routes
});