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
  ],
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token')
  if (isLogin) {
    next()
    if (to.path === '/login') {
      next('/')
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  }
})

export default router
