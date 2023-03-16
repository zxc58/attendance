<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import to from 'await-to-js'
import store from './stores'
import api from './utils/api'
import TopIndex from './components/TopIndex.vue'
import FlashAlert from './components/FlashAlert.vue'

import { checkIsLogin } from './utils/helpers/jwtHelper'
const { useUserStore, useLocationStore } = store
const [userStore, locationStore, router] = [
  useUserStore(),
  useLocationStore(),
  useRouter(),
]
let watchPositionId
onBeforeMount(async () => {
  navigator.geolocation.watchPosition(locationStore.setLocation, null, {
    timeout: 10 * 1000,
    enableHighAccuracy: true,
  })
  if (!checkIsLogin()) return router.push('/login')
  const [, user] = await to(api.user.fetchUserDataByJWT())
  if (!user) return
  userStore.setUser(user)
})
onBeforeUnmount(() => {
  navigator.geolocation.clearWatch(watchPositionId)
})
</script>

<template>
  <FlashAlert />
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
