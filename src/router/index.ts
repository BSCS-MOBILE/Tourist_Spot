import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboad.vue')
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        component: () => import('@/views/Register.vue')
      },
      {
        path: 'product-details/:id',
        component: () => import('@/views/Details.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
