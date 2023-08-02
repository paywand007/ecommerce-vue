import { createRouter, createWebHistory } from 'vue-router'
import Header from "@/views/Header.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Header
    },


  ]
})

export default router
