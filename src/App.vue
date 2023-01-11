<script setup>
import store from './stores'
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import api from './assets/api'
import TopIndex from './components/TopIndex.vue'
import { flash } from './assets/helpers/flashHelper'
import { checkIsLogin } from './assets/helpers/jwtHelper'
const { useUserStore, useLocationStore } = store
const [userStore, locationStore, router] = [
  useUserStore(),
  useLocationStore(),
  useRouter(),
]
let watchPositionId
onBeforeMount(async () => {
  try {
    navigator.geolocation.watchPosition(locationStore.setLocation, null, {
      timeout: 10 * 1000,
      enableHighAccuracy: true,
    })
    const isLogin = checkIsLogin()
    if (isLogin) {
      router.push('/login')
    }
    const user = await api.user.fetchUserDataByJWT()
    userStore.setUser(user)
  } catch (err) {
    flash()
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
