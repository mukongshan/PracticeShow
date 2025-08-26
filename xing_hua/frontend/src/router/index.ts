// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Summary from '@/views/Summary.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: '主页' }
  },
  {
    path: '/summary',
    component: Summary,
    meta: { title: '实践总结' }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
