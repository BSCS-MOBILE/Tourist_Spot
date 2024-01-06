import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
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
        name: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/Register.vue')
      },
      {
        path: 'product-details/:id',
        name: 'product-details',
        component: () => import('@/views/Details.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  if (to.name === 'product-details' && !user) next({ name: 'login', query: { redirect: to.fullPath } })
  next()
})

export default router
