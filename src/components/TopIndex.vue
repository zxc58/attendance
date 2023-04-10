<script setup>
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import store from '../stores'
// import api from '../utils/api'
// import to from 'await-to-js'
import { removeTokens } from '../utils/helpers/jwtHelper'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const { useUserStore } = store
const [userStore, router, route] = [useUserStore(), useRouter(), useRoute()]
const { user, isAdmin } = storeToRefs(userStore)

function logOut() {
  // const [err] = await to(api.user.logout())
  // if (err) return
  userStore.$reset()
  removeTokens()
  router.push('/login')
}
</script>

<template>
  <el-menu
    style="align-items: center"
    router
    :default-active="route.path"
    :ellipsis="false"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item class="logo" v-if="width >= 768 || !user"
      >出勤系統</el-menu-item
    >
    <el-menu-item index="/" v-if="user">出勤</el-menu-item>
    <el-menu-item index="/setting" v-if="user">設定</el-menu-item>
    <el-menu-item index="/admin" v-if="isAdmin">管理</el-menu-item>
    <div style="flex-grow: 1" />
    <el-button @click="logOut" v-if="user">登出</el-button>
  </el-menu>
</template>
<style scoped>
.logo {
  font-size: 2rem;
  color: white;
  pointer-events: none;
}

.flex-grow {
  flex-grow: 1;
}
</style>
