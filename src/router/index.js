import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { checkIsLogin } from '../utils/helpers/jwtHelper'
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
    {
      path: '/admin',
      name: 'admin',
      sensitive: true,
      component: () => import('../views/AdminView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isLogin = checkIsLogin()
  if (isLogin) {
    if (to.path === '/login') return next('/')
    return next()
  }
  if (to.path !== '/login') return next('/login')
  return next()
})

export default router
