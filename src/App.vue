<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import TopIndex from './components/TopIndex.vue'
import { useUserStore } from './stores/user'
import { useLocationStore } from './stores/location'
import router from './router'
const [userStore, locationStore] = [useUserStore(), useLocationStore()]
let watchPositionId
onBeforeMount(async () => {
  navigator.geolocation.watchPosition(locationStore.setLocation, null, {
    timeout: 10 * 1000,
    enableHighAccuracy: false,
  })
  if (!localStorage.getItem('token')) {
    return router.push('/login')
  }
  const isLogin = await userStore.setUser()
  if (!isLogin) {
    localStorage.removeItem('token')
    router.push('/login')
  }
})
onBeforeUnmount(() => {
  navigator.geolocation.clearWatch(watchPositionId)
})
</script>

<template>
  <div class="alert-block">
    <div class="alert alert-primary" id="ga" role="alert">
      A simple primary alert—check it out!
    </div>
  </div>
  <div id="hg"></div>
  <TopIndex />
  <RouterView />
</template>

<style>
.alert-block {
  background-color: aqua;
  position: fixed;
  top: 100px;
  left: 40%;
}
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
@media screen and (min-width: 768px) {
  .d-less-bp {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .d-over-bp {
    display: none;
  }
}
</style>
