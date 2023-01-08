<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import TopIndex from './components/TopIndex.vue'
import { useUserStore } from './stores/user'
import { useLocationStore } from './stores/location'
import { removeTokensAndRedirect } from './assets/helpers/jwtHelper'
const [userStore, locationStore] = [useUserStore(), useLocationStore()]
let watchPositionId
onBeforeMount(async () => {
  navigator.geolocation.watchPosition(locationStore.setLocation, null, {
    timeout: 10 * 1000,
    enableHighAccuracy: true,
  })
  if (!localStorage.getItem('access_token')) {
    return removeTokensAndRedirect()
  }
  const isLogin = await userStore.setUser()
  if (!isLogin) {
    return removeTokensAndRedirect()
  }
})
onBeforeUnmount(() => {
  navigator.geolocation.clearWatch(watchPositionId)
})
</script>

<template>
  <div class="flash-container"></div>
  <TopIndex />
  <RouterView />
</template>

<style>
@keyframes flash-ani {
  from {
    top: 0px;
  }
  to {
    top: 100px;
  }
}
.flash {
  margin-top: 0px;
  margin-bottom: 1px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  animation-name: flash-ani;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.flash-container {
  position: fixed;
  left: 45%;
  z-index: 1100;
  /* top: 100px; */
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
