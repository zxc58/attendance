<script setup>
import { onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import 'element-plus/theme-chalk/display.css'
import to from 'await-to-js'
import store from './stores'
import api from './utils/api'
import TopIndex from './components/TopIndex.vue'

import { checkIsLogin } from './utils/helpers/jwtHelper'
import { storeToRefs } from 'pinia'
const { useUserStore, useAlertStore } = store
const [userStore, alertStore, router] = [
  useUserStore(),
  useAlertStore(),
  useRouter(),
]
const { alertContent } = storeToRefs(alertStore)
onBeforeMount(async () => {
  if (!checkIsLogin()) return router.push('/login')
  const [err, data] = await to(api.user.verifyJWT())
  if (err) return
  userStore.formatAndStoreApiData(data.employee, data.attendances)
})
</script>

<template>
  <FlashAlert v-if="alertContent" />
  <el-container>
    <el-header style="padding-right: 0px; padding-left: 0px">
      <TopIndex />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
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
