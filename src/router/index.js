import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      sensitive: true,
    },
    {
      path: '/login',
      name: 'login',
      sensitive: true,
      component: () => import('../views/LogInView.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      sensitive: true,
      component: () => import('../views/SettingView.vue'),
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      sensitive: true,
      component: () => import('../views/QrpunchView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('access_token')
  if (isLogin) {
    if (to.path === '/login') {
      return next('/')
    }
    return next()
  } else {
    if (to.path !== '/login') {
      return next('/login')
    }
    return next()
  }
})

export default router
