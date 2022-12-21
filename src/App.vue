<script setup>
import { onBeforeMount } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import TopIndex from './components/TopIndex.vue'
import { useUserStore } from './stores/user'
import router from './router'
const userStore = useUserStore()
onBeforeMount(async () => {
  const isLogin = await userStore.setUser()
  if (!isLogin) {
    localStorage.removeItem('token')
    router.push('/login')
  }
})
</script>

<template>
  <TopIndex />
  <RouterView />
</template>

<style>
@media screen and (max-width: 768px) {
  .rwd-d-none {
    display: none;
  }
}
</style>
