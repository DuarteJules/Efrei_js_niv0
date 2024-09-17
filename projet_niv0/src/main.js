import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../src/components/HelloWorld.vue'
import HelloWorld1 from '../src/components/HelloWorld1.vue'

// Vuetify
import 'vuetify/styles'


const routes = [
    { path: '/', component: HelloWorld, },
    { path: '/users', component: HelloWorld1, },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
