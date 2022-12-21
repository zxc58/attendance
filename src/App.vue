<script setup>
import { onBeforeMount } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import TopIndex from './components/TopIndex.vue'
import { useUserStore } from './stores/user'
import router from './router'
const userStore = useUserStore()
onBeforeMount(async () => {
  if (!localStorage.getItem('token')) {
    return router.push('/login')
  }
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
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background: rgb(128, 128, 128);
}
@media screen and (max-width: 768px) {
  .rwd-d-none {
    display: none;
  }
}
</style>
